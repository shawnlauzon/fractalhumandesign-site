export const dynamic = 'force-dynamic' // static by default, unless reading the request

import { User } from '@/types/User'
import { Client, fql, QuerySuccess } from 'fauna'
import * as postmark from 'postmark'

export async function POST(req: Request) {
  let httpResponse

  // configure your client
  const client = new Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
  })

  const postmarkClient = new postmark.ServerClient(
    process.env.POSTMARK_API_KEY || '',
  )

  type Data = {
    id: string
    user: User
  }

  type Page = {
    data: Data[]
    after: string
  }

  try {
    const query = fql`Chart.where(.user.welcomeEmailStepSent == null).pageSize(2) { id, user }`
    const queryResponse: QuerySuccess<Page> = await client.query(query)

    const charts = queryResponse.data.data

    const emails = charts.map((chart) => ({
      From: 'Shawn at Fractal Human Design <shawn@fractalhumandesign.com>',
      To: chart.user.email,
      MessageStream: 'broadcast',
      TemplateAlias: 'welcome-back',
      TemplateModel: {
        product_url: 'https://fractalhumandesign.com',
        product_name: 'Fractal Human Design',
        action_url: `https://fractalhumandesign.com/chart/${chart.id}`,
        name: chart.user.firstName,
        support_email: 'help@fractalhumandesign.com',
        sender_name: 'Shawn at Fractal Human Design',
        company_name: 'Quantum Connecting Technologies Inc',
        company_address: '1800 W 68th St. Suite 118, Hialeah, FL  33014',
      },
    }))

    const emailResponses =
      await postmarkClient.sendEmailBatchWithTemplates(emails)
    console.log('emailResponses', emailResponses)

    for (let i = 0; i < emailResponses.length; i++) {
      if (emailResponses[i].ErrorCode === 0) {
        try {
          await client.query(
            fql`User.byId(users[i])!.update({ welcomeEmailStepSent: 0 })`,
          )
        } catch (e) {
          console.error('Failed setting email for ' + emailResponses[i].To)
        }
      }
    }

    httpResponse = new Response(JSON.stringify(emailResponses), {
      status: 200,
    })
  } catch (error) {
    httpResponse = new Response(JSON.stringify(error), { status: 500 })
  } finally {
    // clean up any remaining resources
    client.close()
  }
  return httpResponse
}

export const dynamic = 'force-dynamic' // static by default, unless reading the request

import { Client, fql } from 'fauna'
import * as postmark from 'postmark'

export async function POST(req: Request) {
  let httpResponse
  const { chartId, user } = await req.json()

  try {
    const postmarkClient = new postmark.ServerClient(
      process.env.POSTMARK_API_KEY || '',
    )

    const thisUrl = 'https://' + req.headers.get('host')

    const actionUrl = `${thisUrl}/guide/${chartId}`

    const emailData = {
      From: 'Shawn at Fractal Human Design <shawn@fractalhumandesign.com>',
      To: user.email,
      TemplateAlias: 'welcome',
      TemplateModel: {
        product_url: 'https://fractalhumandesign.com',
        host_url: thisUrl,
        product_name: 'Fractal Human Design',
        name: user.firstName,
        action_url: actionUrl,
        support_email: 'help@fractalhumandesign.com',
        sender_name: 'Shawn Lauzon',
        company_name: 'Quantum Connecting Technologies Inc',
        company_address: '1800 W 68th St. Suite 118, Hialeah, FL  33014',
      },
    }
    console.log('Sending', emailData)

    const emailResponse = await postmarkClient.sendEmailWithTemplate(emailData)
    console.log('emailResponse', emailResponse)
    if (emailResponse.Message === 'OK') {
      const client = new Client({ secret: process.env.FAUNADB_SERVER_SECRET })
      try {
        await client.query(
          fql`User.byId(${user.id})!.update({ welcomeEmailStepSent: 0 })`,
        )
      } finally {
        client.close()
      }
    }

    httpResponse = new Response('', {
      status: 201,
    })
  } catch (error) {
    httpResponse = new Response(JSON.stringify(error), { status: 500 })
  }

  return httpResponse
}

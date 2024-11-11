export const dynamic = 'force-dynamic' // static by default, unless reading the request

import { User } from '@/types/User'
import { Client, fql } from 'fauna'
import * as postmark from 'postmark'

export async function POST(req: Request) {
  let httpResponse
  const requestJson = await req.json()
  console.log('requestJson', requestJson)

  const client = new Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
  })

  try {
    const thisUrl = 'https://' + req.headers.get('host')

    const user = await client.query<User>(
      fql`User.firstWhere(.isEmailVerified == false && .email == ${requestJson.Recipient})?.update({isEmailVerified: true }) { data }`,
    )
    console.log('updated user', user)

    if (user) {
      const postmarkClient = new postmark.ServerClient(
        process.env.POSTMARK_API_KEY || '',
      )

      const emailData = {
        From: 'shawn@fractalhumandesign.com',
        To: requestJson.Recipient,
        TemplateAlias: 'welcome',
        TemplateModel: {
          product_url: 'https://fractalhumandesign.com',
          host_url: thisUrl,
          product_name: 'Fractal Human Design',
          name: user.data.firstName,
          support_email: 'help@fractalhumandesign.com',
          sender_name: 'Shawn Lauzon',
          company_name: 'Quantum Connecting Technologies Inc',
          company_address: '1800 W 68th St. Suite 118, Hialeah, FL  33014',
        },
      }
      console.log('Sending', emailData)

      const emailResponse =
        await postmarkClient.sendEmailWithTemplate(emailData)
      console.log('emailResponse', emailResponse)
    }

    httpResponse = new Response('', {
      status: 201,
    })
  } catch (error) {
    httpResponse = new Response(JSON.stringify(error), { status: 500 })
  } finally {
    client.close()
  }

  return httpResponse
}

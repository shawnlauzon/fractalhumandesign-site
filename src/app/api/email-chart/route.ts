export const dynamic = 'force-dynamic' // static by default, unless reading the request

import _ from 'lodash'
import * as postmark from 'postmark'

export async function POST(req: Request) {
  let httpResponse
  const params = await req.json()
  if (_.isEmpty(params)) {
    httpResponse = new Response('Expected body', { status: 400 })
  } else {
    console.log('email-chart params', params)

    try {
      // Send an email:
      const postmarkClient = new postmark.ServerClient(
        process.env.POSTMARK_API_KEY || '',
      )

      const thisUrl = 'https://' + req.headers.get('host')

      const actionUrl = thisUrl + '/show-chart?chart=' + params.chartId

      const emailData = {
        From: 'shawn@fractalhumandesign.com',
        To: params.email,
        TemplateAlias: 'free-chart',
        TemplateModel: {
          product_url: 'https://fractalhumandesign.com',
          host_url: thisUrl,
          product_name: 'Fractal Human Design',
          name: params.firstName,
          action_url: actionUrl,
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

      httpResponse = new Response('', {
        status: 201,
      })
    } catch (error) {
      httpResponse = new Response(JSON.stringify(error), { status: 500 })
    }
  }
  return httpResponse
}

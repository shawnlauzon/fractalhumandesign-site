import {
  WelcomeCampaignEmail1,
  WelcomeCampaignEmail2,
  WelcomeCampaignEmail3,
  WelcomeCampaignEmail4,
  WelcomeCampaignEmail5,
} from '@/components/email/WelcomeCampaignEmail'
import { Chart } from '@/types/Chart'
import hdChart from '@/utils/hd-chart'
import { render } from '@react-email/components'
import { Client, fql, QuerySuccess } from 'fauna'
import * as postmark from 'postmark'

export async function GET() {
  let httpResponse

  const postmarkClient = new postmark.ServerClient(
    process.env.POSTMARK_API_KEY || '',
  )

  // Find each of the users who have not yet received the welcome email
  // For each user, render the email template and send it
  // Update the user to indicate that the email has been sent
  // Return a 200 response

  // configure your client
  const client = new Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
  })

  type Page = {
    data: Chart[]
    after: string
  }

  let numEmailsSent = 0

  try {
    // query using your app's local variables
    const query = fql`Chart.all().where(.user.isEmailVerified == true) \
      { id, user, chart { type, authority, profile } }
    `
    // execute the query
    const queryResponse: QuerySuccess<Page> = await client.query<Page>(query)

    const page: Page = queryResponse.data
    if (page) {
      console.log('Found', page)
    }

    page.data.forEach(async (chart) => {
      const email = chart.user.email
      const firstName = chart.user.firstName
      const welcomeEmailStepSent = chart.user.welcomeEmailStepSent

      const hd = hdChart(chart.chart)

      const htmlBody = await render(
        <>
          <WelcomeCampaignEmail1 chart={chart} />
          <WelcomeCampaignEmail2 chart={chart} />
          <WelcomeCampaignEmail3 chart={chart} />
          <WelcomeCampaignEmail4 chart={chart} />
          <WelcomeCampaignEmail5 chart={chart} />
        </>,
      )

      const emailData = {
        From: 'shawn@fractalhumandesign.com',
        To: email,
        Subject: `${firstName}, you are designed to be a ${hd.careerDesign()}.`,
        HtmlBody: htmlBody,
        // TemplateModel: {
        //   product_url: 'https://fractalhumandesign.com',
        //   product_name: 'Fractal Human Design',
        //   name: 'Shawn',
        //   support_email: 'help@fractalhumandesign.com',
        //   sender_name: 'Shawn Lauzon',
        //   company_name: 'Quantum Connecting Technologies, Inc',
        //   company_address: '1800 W 68th St. Suite 118, Hialeah, FL  33014',
        // },
      }
      console.log('Sending', emailData)

      try {
        const emailResponse = await postmarkClient.sendEmail(emailData)
        console.log('emailResponse', emailResponse)

        // Update the user to indicate that the email has been sent
        const updateQuery = fql`Update(Chart, ${chart.id}, { welcomeEmailSent: true })`

        // execute the query
        // const updateResponse = await client.query(updateQuery)

        // console.log('Updated', updateResponse)
        numEmailsSent++
      } catch (error) {
        console.error('Error sending email:', error)
      }
    })
  } catch (error) {
    console.log(error)
  } finally {
    // clean up any remaining resources
    client.close()
  }

  httpResponse = new Response(JSON.stringify({ numEmailsSent }), {
    status: 200,
  })
  return httpResponse
}

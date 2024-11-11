import { WelcomeCampaignEmailChooser } from '@/components/email/WelcomeCampaignEmail'
import { Chart } from '@/types/Chart'
import hdChart from '@/utils/hd-chart'
import { render } from '@react-email/components'
import { Client, fql, QuerySuccess } from 'fauna'
import * as postmark from 'postmark'

export async function POST() {
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

  let emailResponses

  try {
    // query using your app's local variables
    const query = fql`Chart.all().where(.user.isEmailVerified == true && .user.welcomeEmailStepSent != null && .user.email == 'shawn.lauzon@gmail.com') \
      { id, user, chart }
    `

    // execute the query
    const queryResponse: QuerySuccess<Page> = await client.query<Page>(query)

    const page: Page = queryResponse.data
    if (page) {
      console.log('Found', page)
    }

    const subjects = []

    const emails = await Promise.all(
      page.data.map(async (chart) => {
        const email = chart.user.email
        const firstName = chart.user.firstName
        const welcomeEmailStepSent = chart.user.welcomeEmailStepSent!
        const welcomeEmailStep = welcomeEmailStepSent + 1

        const hd = hdChart(chart.chart)

        const htmlBody = await render(
          <WelcomeCampaignEmailChooser
            chart={chart}
            emailIndex={welcomeEmailStep}
          />,
        )

        let subject
        switch (welcomeEmailStep) {
          case 1:
            subject = `${firstName}, you are designed to be a ${hd.careerDesign()}.`
            break
          case 2:
            subject = `Your way of being is designed to ${hd.strategy()}.`
            break
          case 3:
            subject = `To make decisions you can trust, ${hd.authorityDescription()}.`
            break
          case 4:
            subject = `Follow this advice for less ${hd.notSelfTheme()} and more ${hd.signatureTheme()}.`
            break
          case 5:
            subject = `Congratulations ${firstName} on learning about being a ${hd.careerDesign()}`
            break
          default:
            subject = `${firstName}, you are designed to be a ${hd.careerDesign()}.`
            break
        }

        return {
          From: 'Shawn at Fractal Human Design <shawn@fractalhumandesign.com>',
          To: email,
          Subject: subject,
          HtmlBody: htmlBody,
          MessageStream: 'broadcast',
        }
      }),
    )

    console.log('Sending', emails)

    emailResponses = await postmarkClient.sendEmailBatch(emails)
    console.log('emailResponses', emailResponses)

    for (let i = 0; i < emailResponses.length; i++) {
      if (emailResponses[i].ErrorCode === 0) {
        try {
          await client.query(
            fql`User.byId(${page.data[i].user.id})!.update({ welcomeEmailStepSent: ${page.data[i].user.welcomeEmailStepSent! + 1}})`,
          )
        } catch (e) {
          console.error('Failed setting email for ' + emailResponses[i].To, e)
        }
      }
    }
  } catch (error) {
    console.log(error)
  } finally {
    // clean up any remaining resources
    client.close()
  }

  httpResponse = new Response(JSON.stringify(emailResponses), {
    status: 200,
  })
  return httpResponse
}

export const dynamic = 'force-dynamic' // static by default, unless reading the request

export async function POST(req: Request) {
  // let httpResponse

  // // configure your client
  // const client = new Client({
  //   secret: process.env.FAUNADB_SERVER_SECRET,
  // })

  // const postmarkClient = new postmark.ServerClient(
  //   process.env.POSTMARK_API_KEY || '',
  // )

  // type Page = {
  //   data: User[]
  //   after: string
  // }

  // try {
  //   const query = fql`User.where(.isAwkwardEmailSent == null).pageSize(200)`
  //   const queryResponse: QuerySuccess<Page> = await client.query(query)

  //   const users = queryResponse.data.data

  //   const emails = users.map((user) => ({
  //     From: 'Shawn at Fractal Human Design <shawn@fractalhumandesign.com>',
  //     To: user.email,
  //     MessageStream: 'broadcast',
  //     TemplateAlias: 'awkward',
  //     TemplateModel: {
  //       product_url: 'https://fractalhumandesign.com',
  //       product_name: 'Fractal Human Design',
  //       name: user.firstName,
  //       support_email: 'help@fractalhumandesign.com',
  //       sender_name: 'Shawn at Fractal Human Design',
  //       company_name: 'Quantum Connecting Technologies Inc',
  //       company_address: '1800 W 68th St. Suite 118, Hialeah, FL  33014',
  //     },
  //   }))

  //   const emailResponses =
  //     await postmarkClient.sendEmailBatchWithTemplates(emails)
  //   console.log('emailResponses', emailResponses)

  //   for (let i = 0; i < emailResponses.length; i++) {
  //     if (emailResponses[i].ErrorCode === 0) {
  //       try {
  //         await client.query(
  //           fql`User.byId(${users[i].id})!.update({ isAwkwardEmailSent: true })`,
  //         )
  //       } catch (e) {
  //         console.error('Failed setting email for ' + emailResponses[i].To, e)
  //       }
  //     }
  //   }

  //   httpResponse = new Response(JSON.stringify(emailResponses), {
  //     status: 200,
  //   })
  // } catch (error) {
  //   httpResponse = new Response(JSON.stringify(error), { status: 500 })
  // } finally {
  //   // clean up any remaining resources
  //   client.close()
  // }
  // return httpResponse

  return new Response('Not found', { status: 404 })
}

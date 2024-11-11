export const dynamic = 'force-dynamic' // static by default, unless reading the request

export async function POST(req: Request) {
  let httpResponse

  //   // configure your client
  //   const client = new Client({
  //     secret: process.env.FAUNADB_SERVER_SECRET,
  //   })

  //   const backupClient = new Client({
  //     secret: process.env.FAUNADB_BACKUP_SECRET,
  //   })

  //   try {
  //     // Fetch users from the main client
  //     const usersResponse: QuerySuccess<any> = await client.query(
  //       fql`User.all().pageSize(200)`,
  //     )
  //     const users = usersResponse.data
  //     console.log('users', users)

  //     // Backup users to the backup client
  //     for (const user of users.data) {
  //       console.log('backing up user', user)
  //       const resp = await backupClient.query(
  //         fql`User.create({ id: ${user.id}, firstName: ${user.firstName}, lastName: ${user.lastName}, email: ${user.email} })`,
  //       )
  //       console.log('backup response', resp)
  //     }

  //     // Fetch charts from the main client
  //     const chartsResponse: QuerySuccess<any> = await client.query(
  //       fql`Chart.all().pageSize(200) { id, chart, user, meta }`,
  //     )
  //     const charts = chartsResponse.data
  //     console.log('charts', charts)

  //     // Backup charts to the backup client
  //     for (const chart of charts.data) {
  //       console.log('backing up chart', chart)
  //       const resp = await backupClient.query(
  //         fql`Chart.create({ id: ${chart.id}, chart: ${chart.chart}, user: ${chart.user}, meta: ${chart.meta} })`,
  //       )
  //       console.log('backup response', resp)
  //     }

  //     httpResponse = new Response(JSON.stringify({ users, charts }), {
  //       status: 200,
  //     })
  //   } catch (error) {
  //     httpResponse = new Response(JSON.stringify(error), { status: 500 })
  //   } finally {
  //     // clean up any remaining resources
  //     client.close()
  //     backupClient.close()
  //   }
  //   return httpResponse

  return new Response(JSON.stringify({}), {
    status: 404,
  })
}

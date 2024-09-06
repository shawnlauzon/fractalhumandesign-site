export const dynamic = 'force-dynamic' // static by default, unless reading the request

import { Chart } from '@/types/Chart'
import { Client, fql, QuerySuccess } from 'fauna'

export default async () => {
  let httpResponse

  // configure your client
  const client = new Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
  })

  type Page = {
    data: Chart[]
    after: string
  }

  try {
    // query using your app's local variables
    const query = fql`Chart.where(.user.email != null).pageSize(100) { id, user, chart { type, authority, profile } }
    `
    // execute the query
    const queryResponse: QuerySuccess<Page> = await client.query<Page>(query)

    const page: Page = queryResponse.data
    if (page) {
      console.log('Found', page)
    }

    httpResponse = new Response(JSON.stringify(page.data), {
      status: page ? 200 : 404,
    })
  } catch (error) {
    console.log(error)
    httpResponse = new Response(JSON.stringify(error), { status: 500 })
  } finally {
    // clean up any remaining resources
    client.close()
  }
  return httpResponse
}

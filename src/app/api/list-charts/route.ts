export const dynamic = 'force-dynamic' // static by default, unless reading the request

import { SimpleChart } from '@/types/SimpleChart'
import { Client, fql, QuerySuccess } from 'fauna'

export async function GET() {
  let httpResponse

  // configure your client
  const client = new Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
  })

  type Page = {
    data: SimpleChart[]
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

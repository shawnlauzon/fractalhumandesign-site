export const dynamic = 'force-dynamic' // static by default, unless reading the request

import { Chart } from '@/types/Chart'
import { Client, fql, QuerySuccess } from 'fauna'

export async function GET(req: Request) {
  let httpResponse

  const url = new URL(req.url)
  const id = url.searchParams.get('id')
  console.log('get-chart >', id)

  console.log('Using secret', process.env.FAUNADB_SERVER_SECRET)

  // configure your client
  const client = new Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
  })

  try {
    // query using your app's local variables
    const query = fql`Chart.byId(${id}) \
      { id, user, chart { type, authority, gates, definition, centers, profile }, meta { birthData { time { utc } } } }
    `
    // execute the query
    const queryResponse: QuerySuccess<Chart> = await client.query<Chart>(query)

    const chartDoc: Chart = queryResponse.data
    if (chartDoc) {
      console.log('Found Chart', chartDoc)
    }

    httpResponse = new Response(JSON.stringify(chartDoc), {
      status: chartDoc ? 200 : 404,
    })
  } catch (error) {
    httpResponse = new Response(JSON.stringify(error), { status: 500 })
  } finally {
    // clean up any remaining resources
    client.close()
  }
  return httpResponse
}

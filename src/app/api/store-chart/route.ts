export const dynamic = 'force-dynamic' // static by default, unless reading the request
import _ from 'lodash'

import { Client, fql, QuerySuccess } from 'fauna'

export async function POST(req: Request) {
  let httpResponse
  const params = await req.json()
  if (_.isEmpty(params)) {
    httpResponse = new Response('Expected body', { status: 400 })
  } else {
    console.log('store-chart params', params)

    type Chart = {
      id: string
    }

    // configure your client
    const client = new Client({
      secret: process.env.FAUNADB_SERVER_SECRET,
    })

    try {
      const query = fql`
        let user = User.byId(${params.userId})

        Chart.create({
          user: user,
          chart: ${params.chart},
          meta: ${params.meta}
        }) { id, chart }
      `

      const queryResponse: QuerySuccess<Chart> =
        await client.query<Chart>(query)

      const chartDoc: Chart = queryResponse.data
      console.log('Created Chart', chartDoc)

      httpResponse = new Response(JSON.stringify(chartDoc), {
        status: params.id ? 200 : 201,
      })
    } catch (error) {
      httpResponse = new Response(JSON.stringify(error), { status: 500 })
    } finally {
      // clean up any remaining resources
      client.close()
    }
  }
  return httpResponse
}

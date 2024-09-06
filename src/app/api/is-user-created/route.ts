export const dynamic = 'force-dynamic' // static by default, unless reading the request

import { Client, fql, QuerySuccess } from 'fauna'
import _ from 'lodash'

export async function GET(req: Request) {
  let httpResponse

  const url = new URL(req.url)
  // TODO support more than email
  const email = url.searchParams.get('email')
  console.log('checking for email ', email)
  if (!email) {
    return new Response('Email required', { status: 400 })
  }

  type User = {
    id: string
    email: string
  }

  // configure your client
  const client = new Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
  })

  try {
    // query using your app's local variables
    const query = fql`
      User.firstWhere(.email?.toLowerCase()==${_.toLower(email)}) { id }
    `
    // execute the query
    const queryResponse: QuerySuccess<User> = await client.query<User>(query)

    const userDoc: User = queryResponse.data
    console.log('Found User', userDoc)

    httpResponse = new Response(JSON.stringify(userDoc), {
      status: userDoc ? 200 : 404,
    })
  } catch (error) {
    console.error(error)
    httpResponse = new Response(JSON.stringify(error), { status: 500 })
  } finally {
    // clean up any remaining resources
    client.close()
  }
  return httpResponse
}

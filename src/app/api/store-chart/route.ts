export const dynamic = 'force-dynamic' // static by default, unless reading the request

import { Client, fql, QuerySuccess } from 'fauna'

export async function POST(req: Request) {
  let httpResponse
  const params = await req.json()
  console.log('store-user params', params)

  type User = {
    id: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
  }

  const user = {
    firstName: params.firstName,
    lastName: params.lastName,
    email: params.email,
    phoneNumber: params.phoneNumber,
  }

  // configure your client
  const client = new Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
  })

  try {
    const query = params.id
      ? fql`User.byId(${params.id})?.update(${user}) { id, firstName, lastName, email, phoneNumber }`
      : fql`User.create(${user}) { id, firstName, lastName, email, phoneNumber }`

    // execute the query
    const queryResponse: QuerySuccess<User> = await client.query<User>(query)

    const userDoc: User = queryResponse.data
    console.log(params.id ? 'Update user' : 'Created user', userDoc)

    httpResponse = new Response(JSON.stringify(userDoc), {
      status: params.id ? 200 : 201,
    })
  } catch (error) {
    httpResponse = new Response(JSON.stringify(error), { status: 500 })
  } finally {
    // clean up any remaining resources
    client.close()
  }

  return httpResponse
}

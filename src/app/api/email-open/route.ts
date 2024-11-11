export const dynamic = 'force-dynamic' // static by default, unless reading the request

import { User } from '@/types/User'
import { Client, fql } from 'fauna'

export async function POST(req: Request) {
  let httpResponse
  const requestJson = await req.json()
  console.log('requestJson', requestJson)

  const client = new Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
  })

  try {
    await client.query<User>(
      fql`User.firstWhere(.isEmailVerified == false && .email == ${requestJson.Recipient})?.update({isEmailVerified: true })`,
    )

    httpResponse = new Response(requestJson.Recipient, {
      status: 200,
    })
  } catch (error) {
    console.error('Error', error)
    httpResponse = new Response(JSON.stringify(error), { status: 500 })
  } finally {
    client.close()
  }

  return httpResponse
}

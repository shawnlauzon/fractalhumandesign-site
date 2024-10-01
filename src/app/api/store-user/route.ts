export const dynamic = 'force-dynamic' // static by default, unless reading the request

import { User } from '@/types/User'
import activecampaign from '@api/activecampaign'
import { Client, fql, QuerySuccess } from 'fauna'
import { ACTIVE_CAMPAIGN_CUSTOM_FIELD_FAUNA_USER_ID } from '../constants'

export async function POST(req: Request) {
  let httpResponse: Response
  const params = await req.json()
  console.log('store-user params', params)

  const user = {
    firstName: params.firstName,
    lastName: params.lastName,
    email: params.email,
    emailOptIn: params.emailOptIn,
    phoneNumber: params.phoneNumber,
  }

  // configure your client
  const client = new Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
  })

  try {
    const query = params.id
      ? fql`User.byId(${params.id})?.update(${user}) { id, firstName, lastName, email, emailOptIn, phoneNumber }`
      : fql`User.create(${user}) { id, firstName, lastName, email, emailOptIn, phoneNumber }`

    // execute the query
    const queryResponse: QuerySuccess<User> = await client.query<User>(query)

    const userDoc: User = queryResponse.data
    console.log(params.id ? 'Update user' : 'Created user', userDoc)

    let activeCampaignId = undefined
    try {
      const newContact = await pushToActiveCampaign(
        params,
        queryResponse.data.id,
      )
      console.log('ActiveCampaign Contact created', newContact)
      activeCampaignId = newContact.contact?.id
    } catch (e) {
      console.error('Failed to create contact in ActiveCampaign', e)
    }

    httpResponse = new Response(
      JSON.stringify({
        ...userDoc,
        activeCampaignId,
      }),
      {
        status: params.id ? 200 : 201,
      },
    )
  } catch (error) {
    httpResponse = new Response(JSON.stringify(error), { status: 500 })
  } finally {
    // clean up any remaining resources
    client.close()
  }

  return httpResponse
}

async function pushToActiveCampaign(user: User, faunaUserId: string) {
  const contact = {
    contact: {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phoneNumber,
      fieldValues: [
        {
          field: ACTIVE_CAMPAIGN_CUSTOM_FIELD_FAUNA_USER_ID,
          value: faunaUserId,
        },
      ],
    },
  }
  return (await activecampaign.createANewContact(contact)).data
}

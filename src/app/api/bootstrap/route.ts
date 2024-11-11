export const dynamic = 'force-dynamic' // static by default, unless reading the request

export async function POST(req: Request) {
  //   let httpResponse

  //   // configure your client
  //   const client = new Client({
  //     secret: process.env.FAUNADB_SERVER_SECRET,
  //   })

  //   type User = {
  //     id: string
  //     // emailToken?: string
  //     isEmailVerified?: boolean
  //     emailOptIn?: boolean
  //   }

  // type Page = {
  //   data: User[]
  //   after: string
  // }

  //   try {
  //     const users = []
  //     // query using your app's local variables
  //     const query = fql`User.all().pageSize(200) { id }
  //     `

  //     // execute the query
  //     const queryResponse: QuerySuccess<Page> =
  //       await client.query(query)

  //     for (const user of queryResponse.data.data) {
  //       console.log('user', user)
  //       // user.emailToken = uuidv4()

  //       await client.query(
  //         fql`User.byId(${user.id})!.update({emailOptIn: true, isEmailVerified: true })`,
  //       )

  //       users.push(user)
  //       console.log('updated user', user)
  //     }

  //     httpResponse = new Response(JSON.stringify(users), {
  //       status: 200,
  //     })
  //   } catch (error) {
  //     httpResponse = new Response(JSON.stringify(error), { status: 500 })
  //   } finally {
  //     // clean up any remaining resources
  //     client.close()
  //   }
  //   return httpResponse

  return new Response(JSON.stringify({}), {
    status: 404,
  })
}

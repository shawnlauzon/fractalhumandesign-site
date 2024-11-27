'use server'

import { Coupon, User } from '@/types/User'
import { Client, fql, QuerySuccess } from 'fauna'
import Stripe from 'stripe'

export async function storeCoupon({
  userId,
  coupon,
}: {
  userId: string
  coupon: Stripe.Coupon
}) {
  const myCoupon = <Coupon>{
    id: coupon.id,
    percentOff: coupon.percent_off,
    redeemBy: coupon.redeem_by,
  }

  const client = new Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
  })

  try {
    const query = fql`
        let user = User.byId(${userId})

        User.update(user, {
            coupon:  myCoupon
        }) { id, coupon }
        `
    const queryResponse: QuerySuccess<User> = await client.query<User>(query)

    const userDoc: User = queryResponse.data
    console.log('Updated user', userDoc)

    return userDoc
  } catch (error) {
    console.error(error)
  } finally {
    client.close()
  }
}

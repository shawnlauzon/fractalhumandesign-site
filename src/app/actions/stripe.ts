'use server'

import { stripe } from '@/lib/stripe'
import { Duration } from 'luxon'
import Stripe from 'stripe'

export type GenerateCouponProps = {
  percentOff: number
  validFor: Duration
}

export async function generateSingleRedemptionCoupon({
  percentOff,
  validFor,
}: GenerateCouponProps) {
  let coupon = <Stripe.Coupon | null>null
  const redeemBy = validFor.toMillis() + Date.now()
  if (stripe) {
    coupon = await stripe.coupons.create({
      percent_off: percentOff,
      max_redemptions: 1,
      redeem_by: redeemBy,
    })
  }

  return coupon
}

'use server'

import { type Offering } from '@/types/Offering'
import { getPriceStrFromProductId } from '@/utils/stripe'
import Image from 'next/image'

export default async function OfferingCard({
  offering,
}: {
  offering: Offering
}) {
  const env =
    process.env.NEXT_PUBLIC_STRIPE_ENV === 'production' ? 'production' : 'test'
  const priceStr = getPriceStrFromProductId(offering.productId[env])

  return (
    <div key={offering.id} className="group relative">
      <div className="relative">
        <Image
          alt={offering.imageAlt}
          src={offering.image}
          className="aspect-[4/3] w-full rounded-lg bg-gray-100 object-cover"
        />
        {/* <img
    alt={offering.imageAlt}
    src={offering.imageSrc}
    className="aspect-[4/3] w-full rounded-lg bg-gray-100 object-cover"
  /> */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100"
        >
          <div className="w-full rounded-md bg-white/75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
            Learn more
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
        <h3>
          <a href={offering.href}>
            <span aria-hidden="true" className="absolute inset-0" />
            {offering.name}
          </a>
        </h3>
        <p>{priceStr}</p>
      </div>
      <p className="mt-1 text-sm text-gray-500">{offering.description}</p>
    </div>
  )
}

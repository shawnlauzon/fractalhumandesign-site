import { Offering } from '@/types/Offering'
import { getPriceStrFromProductId } from '@/utils/stripe'
import Image from 'next/image'
import StripeBuyButton from './StripeBuyButton'

function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

interface OfferingDetailsProps {
  offering: Offering
}

export default async function OfferingDetails({
  offering,
}: OfferingDetailsProps) {
  const env =
    process.env.NEXT_PUBLIC_STRIPE_ENV === 'production' ? 'production' : 'test'
  const priceStr = await getPriceStrFromProductId(offering.productId[env])

  return (
    <div className="bg-white">
      <div className="pb-16 pt-6 sm:pb-24">
        <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="flex justify-between">
                <h1 className="text-xl font-medium text-gray-900">
                  {offering.name}
                </h1>
                <p className="text-xl font-medium text-gray-900">{priceStr}</p>
              </div>
              {/* Reviews */}
              <div className="mt-4">
                {/* <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <p className="text-sm text-gray-700">
                    {offering.rating}
                    <span className="sr-only"> out of 5 stars</span>
                  </p>
                  <div className="ml-1 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        aria-hidden="true"
                        className={classNames(
                          offering.rating > rating
                            ? 'text-yellow-400'
                            : 'text-gray-200',
                          'size-5 shrink-0',
                        )}
                      />
                    ))}
                  </div>
                  <div
                    aria-hidden="true"
                    className="ml-4 text-sm text-gray-300"
                  >
                    ·
                  </div>
                  <div className="ml-4 flex">
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      See all {offering.reviewCount} reviews
                    </a>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Image gallery */}
            <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
              <h2 className="sr-only">Images</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                <Image
                  key={offering.id}
                  alt={offering.imageAlt}
                  src={offering.image}
                  className={classNames(
                    'rounded-lg lg:col-span-2 lg:row-span-2',
                  )}
                />
              </div>
            </div>

            <div className="mt-8 lg:col-span-5">
              <StripeBuyButton url={offering.paymentLink[env]} />
              {/* Product details */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">
                  Description
                </h2>

                <div
                  dangerouslySetInnerHTML={{ __html: offering.details }}
                  className="mt-4 space-y-4 text-sm/6 text-gray-500"
                />
              </div>
              {offering.includes && (
                <div className="mt-8 border-t border-gray-200 pt-8">
                  <h2 className="text-sm font-medium text-gray-900">
                    We discuss your:
                  </h2>

                  <div className="mt-4">
                    <ul
                      role="list"
                      className="list-disc space-y-1 pl-5 text-sm/6 text-gray-500 marker:text-gray-300"
                    >
                      {offering.includes.map((item) => (
                        <li key={item} className="pl-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              <section aria-labelledby="policies-heading" className="mt-10">
                <h2 id="policies-heading" className="sr-only">
                  Our Policies
                </h2>

                {/* <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {policies.map((policy) => (
                    <div
                      key={policy.name}
                      className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center"
                    >
                      <dt>
                        <policy.icon
                          aria-hidden="true"
                          className="mx-auto size-6 shrink-0 text-gray-400"
                        />
                        <span className="mt-4 text-sm font-medium text-gray-900">
                          {policy.name}
                        </span>
                      </dt>
                      <dd className="mt-1 text-sm text-gray-500">
                        {policy.description}
                      </dd>
                    </div>
                  ))}
                </dl> */}
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

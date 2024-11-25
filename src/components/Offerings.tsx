import offerings from '@/offerings'
import OfferingCard from './OfferingCard'

export default function Offerings() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between space-x-4">
          {/* <h2 className="text-lg font-medium text-gray-900">
            Customers also viewed
          </h2>
          <a
            href="#"
            className="whitespace-nowrap text-sm font-medium text-sky-600 hover:text-sky-500"
          >
            View all
            <span aria-hidden="true"> &rarr;</span>
          </a> */}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          {offerings.map((offering) => (
            <OfferingCard offering={offering} key={offering.id} />
          ))}
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/guide"
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Or start with a free personalized guide
          </a>
          {/* <a href="#" className="text-sm/6 font-semibold text-white">
              Learn more <span aria-hidden="true">→</span>
            </a> */}
        </div>
      </div>
    </div>
  )
}

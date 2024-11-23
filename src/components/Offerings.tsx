import analysisGraphic from '@/images/analysis-4x3.png'
import overviewGraphic from '@/images/overview-4x3.png'
import partnershipGraphic from '@/images/partnership-4x3.png'
import pentaGraphic from '@/images/penta-4x3.png'
import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Career Design Overview',
    category:
      'Learn how to stop depending on others and make decisions that are right for you.',
    href: '#',
    price: '$197',
    image: overviewGraphic,
    // imageSrc:
    //   'https://tailwindui.com/plus/img/ecommerce-images/product-page-05-related-product-01.jpg',
    imageAlt: 'BG5 Career Design Overview graphic',
  },
  {
    id: 2,
    name: 'Career Design Analysis',
    category:
      'Expand on the Overview to gain in-depth knowledge of your strengths, shadows, and your purpose in life.',
    href: '#',
    price: '$997',
    image: analysisGraphic,
    // imageSrc:
    //   'https://tailwindui.com/plus/img/ecommerce-images/product-page-05-related-product-01.jpg',
    imageAlt: 'BG5 Career Design Analysis graphic',
  },
  {
    id: 3,
    name: 'Partnership Analysis',
    category:
      'Whether for a business or personal relationship, learn how to work together and avoid unnecessary conflict.',
    href: '#',
    price: '$1297',
    image: partnershipGraphic,

    // imageSrc:
    //   'https://tailwindui.com/plus/img/ecommerce-images/product-page-05-related-product-01.jpg',
    imageAlt: 'BG5 Partnership Analysis graphic',
  },
  {
    id: 3,
    name: 'Alpha One Business Leadership',
    category:
      'Discover your core business challenges and what exactly you can do to have the success you desire.',
    href: '#',
    price: '$1997',
    image: pentaGraphic,

    // imageSrc:
    //   'https://tailwindui.com/plus/img/ecommerce-images/product-page-05-related-product-01.jpg',
    imageAlt: 'BG5 Alpha One Business Leadership graphic',
  },
]

export default function Example() {
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
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="relative">
                <Image
                  alt={product.imageAlt}
                  src={product.image}
                  className="aspect-[4/3] w-full rounded-lg bg-gray-100 object-cover"
                />
                {/* <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
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
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p>{product.price}</p>
              </div>
              <p className="mt-1 text-sm text-gray-500">{product.category}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/guide"
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Or start with a free personalized guide.
          </a>
          {/* <a href="#" className="text-sm/6 font-semibold text-white">
              Learn more <span aria-hidden="true">→</span>
            </a> */}
        </div>
      </div>
    </div>
  )
}

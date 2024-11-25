import analysisGraphic from '@/images/analysis-4x3.png'
import overviewGraphic from '@/images/overview-4x3.png'
import { Offering } from './types/Offering'

export default <Offering[]>[
  {
    id: 'overview',
    productId: {
      test: 'prod_RHLPc7waSs12Oo',
      production: 'prod_RGyUPgDDDosxSV',
    },
    name: 'Career Design Overview',
    description:
      'Learn how to stop depending on others and make decisions that are right for you.',
    details: `
    <p>Discover your unique career design and how to make decisions that are right for you.</p>`,
    includes: [
      'Career type',
      'Personal interaction style',
      'Decision-making strategy',
      'Key indicators',
      'Assimilation style',
      'Environmental style',
    ],
    href: '/offerings/overview',
    image: overviewGraphic,
    paymentLink: {
      test: 'https://buy.stripe.com/test_5kA7vc4pUh0MbtKfYY',
      production: 'https://buy.stripe.com/00g5o42xJ0ggcOQ7ss',
    },
    // imageSrc:
    //   'https://tailwindui.com/plus/img/ecommerce-images/product-page-05-related-product-01.jpg',
    imageAlt: 'BG5 Career Design Overview graphic',
  },
  {
    id: 'analysis',
    productId: {
      test: 'prod_RHLSTYF4ZmOsnJ',
      production: 'prod_RHJtTKMXiY2E43',
    },
    name: 'Career Design Analysis',
    description:
      'Expand on the Overview to gain in-depth knowledge of your strengths, shadows, and your purpose in life.',
    details: `
    <p>Discover your unique career design and how to make decisions that are right for you.</p>`,

    href: '/offerings/analysis',
    image: analysisGraphic,
    paymentLink: {
      test: 'https://buy.stripe.com/test_dR63eWcWqfWIcxO289',
      production: 'https://buy.stripe.com/28o17Ofkv8MM168aEF',
    },

    // imageSrc:
    //   'https://tailwindui.com/plus/img/ecommerce-images/product-page-05-related-product-01.jpg',
    imageAlt: 'BG5 Career Design Analysis graphic',
  },
  // {
  //   id: 'partnership',
  //   productId: {
  //     test: 'prod_RHLSodfWhaOO9W',
  //     production: 'prod_RHK7W7CB1dCich',
  //   },
  //   name: 'Partnership Analysis',
  //   description:
  //     'Whether for a business or personal relationship, learn how to work together and avoid unnecessary conflict.',
  //   href: '/offerings/partnership',
  //   image: partnershipGraphic,
  //   paymentLink: {
  //     test: 'https://buy.stripe.com/test_4gw4j02hM39W2Xe5km',
  //     production: 'https://buy.stripe.com/eVaaIogoz0gg5moeUW',
  //   },

  //   // imageSrc:
  //   //   'https://tailwindui.com/plus/img/ecommerce-images/product-page-05-related-product-01.jpg',
  //   imageAlt: 'BG5 Partnership Analysis graphic',
  // },
  // {
  //   id: 'penta',
  //   productId: {
  //     test: 'prod_RHLSpCpCV30IaW',
  //     production: 'prod_RHK7xNjv6qcUuG',
  //   },
  //   name: 'Alpha One Business Leadership',
  //   description:
  //     'Discover your core business challenges and what exactly you can do to have the success you desire.',
  //   href: '/offerings/penta',
  //   image: pentaGraphic,
  //   paymentLink: {
  //     test: 'https://buy.stripe.com/test_5kA7vc2hM11O0P6147',
  //     production: 'https://buy.stripe.com/00gaIo2xJ6EEeWY6or',
  //   },

  //   // imageSrc:
  //   //   'https://tailwindui.com/plus/img/ecommerce-images/product-page-05-related-product-01.jpg',
  //   imageAlt: 'BG5 Alpha One Business Leadership graphic',
  // },
]

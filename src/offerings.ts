import analysisGraphic from '@/images/analysis-4x3.png'
import overviewGraphic from '@/images/overview-4x3.png'
import partnershipGraphic from '@/images/partnership-4x3.png'
import pentaGraphic from '@/images/penta-4x3.png'
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
    <p>Discover your unique career design and how to make decisions that are right for you.</p>
    <p>We will meet for 60-90 minutes to go over your overview and answer any questions you may have.</p>
    <p>You will receive a recording of the session and a PDF of your overview.</p>`,
    successCodes: [
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
      production: 'prod_RHOucbOgHX4S8g',
    },
    name: 'Career Design Analysis',
    description:
      'Expand on the Overview to gain in-depth knowledge of your strengths, shadows, and your purpose in life.',
    details: `
    <p><i>Note: This includes everything in the Overview, and so you do not need to purchase both.</i></p>
    <p>Discover your unique career design and how to make decisions that are right for you.</p>
    <p>We will meet a total of 3 times for 60-90 minutes each to go over your analysis and answer any questions you may have.</p>
      <p>You will receive a recording of all sessions and an accompanying PDF.</p>`,
    successCodes: [
      'Career type',
      'Personal interaction style',
      'Decision-making strategy',
      'Key indicators',
      'Assimilation style',
      'Environmental style',
      'Business Skills',
      'Team & Business Attributes',
      'Large Business Roles',
      'Defined Functions',
      'Distractions / Shadows',
      'Public Role',
      'Life Work',
      'General Thematics',
      'Strengths & Contributions',
      'Traits & Qualities',
    ],
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
  {
    id: 'partnership',
    productId: {
      test: 'prod_RHLSodfWhaOO9W',
      production: 'prod_RHOwChZeXhmmjY',
    },
    name: 'Partnership Analysis',
    description:
      'Whether for a business or personal relationship, learn how to work together and avoid unnecessary conflict.',
    details: `
      <p><i>Note: A Career Design Analysis by at least one of the participants is a prerequisite.</i></p>
      <p>In this session we will meet twice; first to go over any individual observations which have not been covered in previous sessions, and then one to look at the strengths and challenges in the relationship, as well as what can be done to improve the relationship.</p>
      <p>You will receive a recording of all sessions and an accompanying PDF.</p>`,

    href: '/offerings/partnership',
    image: partnershipGraphic,
    paymentLink: {
      test: 'https://buy.stripe.com/test_4gw4j02hM39W2Xe5km',
      production: 'https://buy.stripe.com/eVaaIogoz0gg5moeUW',
    },

    // imageSrc:
    //   'https://tailwindui.com/plus/img/ecommerce-images/product-page-05-related-product-01.jpg',
    imageAlt: 'BG5 Partnership Analysis graphic',
  },
  {
    id: 'penta',
    productId: {
      test: 'prod_RIDWO5ZiLxwJ7l',
      production: 'prod_RHK7xNjv6qcUuG',
    },
    name: 'Alpha One Business Leadership & Small Team Analysis',
    description:
      'Discover your core business challenges and what exactly you can do to have the success you desire.',
    details: `
      <p><i>Note: A Career Design Analysis is a prerequisite before diving into your team.</i></p>
      <p>In this extensive analysis of you and your team, we will go deeper into your own business strengths, focusing on your specific leadership skills and how they can be applied to your team.</p>
      <p>Then we will look at each of the members of your team and how you can relate better with each of them.</p>
      <p>Finally we will look at the team as a whole and how you can work together to achieve your goals.</p>
      <p>You will receive a recording of all sessions and an accompanying PDF.</p>`,

    href: '/offerings/penta',
    image: pentaGraphic,
    paymentLink: {
      test: 'https://buy.stripe.com/test_aEU9Dk8GaeSEgO4aEI',
      production: 'https://buy.stripe.com/8wMcQwb4faUU9CE004',
    },

    // imageSrc:
    //   'https://tailwindui.com/plus/img/ecommerce-images/product-page-05-related-product-01.jpg',
    imageAlt: 'BG5 Alpha One Business Leadership graphic',
  },
]

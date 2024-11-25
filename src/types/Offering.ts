import { StaticImageData } from 'next/image'

export type Offering = {
  id: string
  productId: EnvironmentData
  name: string
  description: string
  details: string
  successCodes?: string[]
  href: string
  paymentLink: EnvironmentData
  image: StaticImageData
  imageAlt: string
}

export type EnvironmentData = {
  test: string
  production: string
}

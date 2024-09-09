import { BirthDataForm } from '@/components/BirthDataForm'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { sendChart } from '../actions'
import { createChart } from './create-chart'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  openGraph: {
    title: 'Get your free personal guide to flow',
    description:
      'Discover the secret to living in less frustration and more calm.',
    url: 'https://freeguidetoflow.com',
    siteName: 'Fractal Human Design',
    images: [
      {
        url: 'https://fractalhumandesign.com/man-relaxing-on-beach.jpg',
        width: 1200,
        height: 620,
      },
    ],
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <BirthDataForm
          createChartAction={createChart}
          sendChartAction={sendChart}
        />
      </main>
      <Footer />
    </>
  )
}

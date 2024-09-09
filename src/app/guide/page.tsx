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

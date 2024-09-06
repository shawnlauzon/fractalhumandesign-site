import { Footer } from '@/components/Footer'
import { Guide } from '@/components/Guide'
import { Header } from '@/components/Header'
import { storeChart } from '../actions'
import { createChart } from './create-chart'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Guide createChartAction={createChart} storeChartAction={storeChart} />
      </main>
      <Footer />
    </>
  )
}

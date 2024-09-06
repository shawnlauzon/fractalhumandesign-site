import { Footer } from '@/components/Footer'
import { Guide } from '@/components/Guide'
import { Header } from '@/components/Header'
import { createChart } from '../actions'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Guide createChartAction={createChart} />
      </main>
      <Footer />
    </>
  )
}

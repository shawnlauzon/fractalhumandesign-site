import { BirthDataForm } from '@/components/BirthDataForm'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { storeChart } from '../actions'
import { createChart } from './create-chart'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <BirthDataForm
          createChartAction={createChart}
          storeChartAction={storeChart}
        />
      </main>
      <Footer />
    </>
  )
}

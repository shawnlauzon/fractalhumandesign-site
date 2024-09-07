import { BirthDataForm } from '@/components/BirthDataForm'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { sendChart } from '../actions'
import { createChart } from './create-chart'

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

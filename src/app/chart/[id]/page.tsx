import ChartGuide from '@/components/ChartGuide'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function ChartPage({ params }: { params: { id: string } }) {
  return (
    <>
      <Header />
      <main>
        <ChartGuide chartId={params.id} />
      </main>
      <Footer />
    </>
  )
}

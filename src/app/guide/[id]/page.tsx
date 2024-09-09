import ChartGuide from '@/components/ChartGuide'
import { Footer } from '@/components/Footer'

export default function ChartPage({ params }: { params: { id: string } }) {
  return (
    <>
      <main>
        <ChartGuide chartId={params.id} />
      </main>
      <Footer />
    </>
  )
}

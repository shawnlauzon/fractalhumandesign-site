import AnnotatedChart from '@/components/AnnotatedChart'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function ChartPage({ params }: { params: { id: string } }) {
  return (
    <>
      <Header />
      <main>
        <AnnotatedChart chartId={params.id} />
      </main>
      <Footer />
    </>
  )
}

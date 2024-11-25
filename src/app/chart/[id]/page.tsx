import AnnotatedChart from '@/components/AnnotatedChart'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

type tParams = Promise<{ id: string }>

export default async function ChartPage(props: { params: tParams }) {
  const { id } = await props.params
  return (
    <>
      <Header />
      <main>
        <AnnotatedChart chartId={id} />
      </main>
      <Footer />
    </>
  )
}

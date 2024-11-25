import ChartGuide from '@/components/ChartGuide'
import { Footer } from '@/components/Footer'

type tParams = Promise<{ id: string }>

export default async function ChartPage(props: { params: tParams }) {
  const { id } = await props.params
  return (
    <>
      <main>
        <ChartGuide chartId={id} />
      </main>
      <Footer />
    </>
  )
}

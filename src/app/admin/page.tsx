export const dynamic = 'force-dynamic'

import ChartList from '@/components/ChartList'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ChartList />
      </main>
      <Footer />
    </>
  )
}

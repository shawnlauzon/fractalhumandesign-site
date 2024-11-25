import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import OfferingDetails from '@/components/OfferingDetails'
import offerings from '@/offerings'

// const offering = offerings.find((o) => o.id === 'partnership')!

// export const metadata: Metadata = {
//   openGraph: {
//     title: offering.name,
//     description: offering.description,
//     siteName: 'Fractal Human Design',
//     // images: [
//     //   {
//     //     url: 'https://fractalhumandesign.s3.us-east-1.amazonaws.com/site/images/og-man-relaxing-on-beach.jpg',
//     //     width: 1200,
//     //     height: 620,
//     //   },
//     // ],
//   },
// }

type tParams = Promise<{ id: string }>

export default async function OfferingDetailPage(props: any) {
  const { id } = await props.params
  const offering = offerings.find((o) => o.id === id)!
  return (
    <>
      <Header />
      <main>
        <OfferingDetails offering={offering!} />
      </main>
      <Footer />
    </>
  )
}

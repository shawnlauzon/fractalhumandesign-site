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

export default async function OfferingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
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

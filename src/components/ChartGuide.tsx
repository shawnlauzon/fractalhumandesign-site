// This is a Next.js Server Component by default in the /app directory.
import ChartDetail from '@/components/ChartDetail'
import ChartImage from './ChartImage'

interface ChartGuideProps {
  chartId: string
}

// Fetch data from the server
async function fetchChartData(chartId: string) {
  const response = await fetch(
    `${process.env.BASE_URL}/api/get-chart?id=${chartId}`,
    {
      cache: 'no-store', // Prevent caching to always fetch fresh data
    },
  )

  if (!response.ok) {
    throw new Error('Failed to fetch chart data')
  }

  return response.json()
}

export default async function ChartGuide({ chartId }: ChartGuideProps) {
  const chartData = await fetchChartData(chartId)
  const { user, chart, meta } = chartData
  const birthTime = meta?.birthData?.time?.utc
  const firstName = user?.firstName
  const lastName = user?.lastName

  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-sky-600">
          Crafted for {firstName} {lastName}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Your Personal Tools for Flow
        </h1>
        <p className="mt-6 text-xl leading-8">
          Congratulations on taking the first step to understanding yourself and
          how absolutely, incredibly unique you are. The goal here is to give
          you some basic knowledge that will help you live a life in alignment
          with your authentic self.
        </p>
        <div className="mt-10 max-w-2xl">
          <ChartDetail chart={chart} />
        </div>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
          Your Human Design chart
        </h2>

        <p className="mt-8"></p>

        <figure className="mt-16">
          <ChartImage birthTime={birthTime} />
        </figure>
      </div>
    </div>
  )
}

{
  /* {birthTime && chart && (
        <div className="mx-auto flex max-w-3xl flex-col px-2">
          <div>
            <h2 className="text-xl font-semibold">Your chart</h2>
            <p>
              As you can see, your chart is much more complex than what we can
              go through here. Want personal support? Book a personal session
              and let's work together to create the life you desire.
            </p>
            <Button href="https://calendly.com/fractalhumandesign/quick">
              <a className="mb-8 mt-2 block rounded-lg bg-pink-600 py-3 text-center font-bold text-white">
                Book a free call
              </a>
            </Button>
          </div>
        </div>
      )}

      <div className="mx-auto flex flex-wrap">
        <div className="w-full px-2 sm:w-7/12">
          <ChartImage birthTime={birthTime} />
        </div>
      </div>
    </div> */
}

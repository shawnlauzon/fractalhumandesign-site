// This is a Next.js Server Component by default in the /app directory.
import ChartDetail from '@/components/ChartDetail'
import ChartView from '@/components/ChartImage'
import { Button } from './Button'

interface ChartGuideProps {
  chartId: string
}

// Fetch data from the server
async function fetchChartData(chartId: string) {
  const response = await fetch(`/api/get-chart?id=${chartId}`, {
    cache: 'no-store', // Prevent caching to always fetch fresh data
  })

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

  return (
    <div className="text-body-1 container mx-auto">
      <div className="mx-auto flex max-w-3xl flex-col px-2">
        {user && (
          <div>
            <h1 className="py-6 text-2xl font-bold">
              {firstName}'s Tools for Flow
            </h1>
            <ChartDetail chart={chart} />
          </div>
        )}
      </div>

      {birthTime && chart && (
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
          <ChartView birthTime={birthTime} />
        </div>
        <div className="w-full px-2 sm:w-5/12">
          <div className="rounded-lg bg-white p-4 shadow">
            <ChartDetail chart={chart} />
          </div>
        </div>
      </div>
    </div>
  )
}

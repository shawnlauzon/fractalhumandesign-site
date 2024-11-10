import { Chart } from '@/types/Chart'
import ChartImage from './ChartImage'
import ChartProperties from './ChartProperties'

interface AnnotatedChartProps {
  chartId: string
}

// Fetch data from the server
async function fetchChart(chartId: string) {
  const response = await fetch(
    `${process.env.SERVER_URL}/api/get-chart?id=${chartId}`,
    {
      cache: 'no-store', // Prevent caching to always fetch fresh data
    },
  )

  if (!response.ok) {
    throw new Error('Failed to fetch chart')
  }

  return (await response.json()) as Chart
}

export default async function AnnotatedChart({ chartId }: AnnotatedChartProps) {
  const chart = await fetchChart(chartId)

  return (
    <>
      <div className="bg-white">
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
          <div className="mx-auto max-w-7xl px-6 py-8 sm:py-10 lg:px-8">
            <h1 className="max-w-2xl text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto">
              Here's your chart!
            </h1>
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                  Check your inbox for emails for the next 5 days which will
                  guide you through every step.
                </p>
                <ChartProperties chart={chart} />
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="https://calendly.com/fractalhumandesign/bg5overview"
                    target="_blank"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Or schedule a $97 session with me right away
                  </a>
                </div>
              </div>
              <ChartImage
                birthTime={chart.meta.birthData.time.utc}
                className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>
      </div>
    </>
  )
}

'use client'

import BirthDataForm from '@/components/BirthDataForm'
import { useSearchParams } from 'next/navigation'

const GetBirthDataPage = () => {
  const searchParams = useSearchParams()
  const isAdmin = searchParams.get('admin')

  // const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  const saveChart = (chartId) => {
    setChartId(chartId)
    if (chartId) {
      if (searchParams.get('next') === 'leavejob') {
        history.push({
          pathname: '/leave-job-interview',
          search: `?chart=${chartId}`,
        })
      } else {
        history.push({
          pathname: '/request-email',
          search: `?chart=${chartId}`,
        })
      }
    }
  }

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <main>
        <div className="container mx-auto p-4">
          <BirthDataForm onChart={saveChart} />
          {isAdmin && (
            <div className="mt-4">
              <p>Or enter a chart id here:</p>
              <input
                type="text"
                value={chartId}
                onChange={(e) => saveChart(e.target.value.trim())}
                className="mt-2 w-full rounded border border-gray-300 p-2"
              />
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default GetBirthDataPage

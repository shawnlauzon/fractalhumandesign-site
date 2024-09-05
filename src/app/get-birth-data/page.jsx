'use client'

import BirthDataForm from '@/components/BirthDataForm'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

const Admin = () => {
  const searchParams = useSearchParams()
  const isAdmin = searchParams.get('admin')

  return (
    <>
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
    </>
  )
}

export default function GetBirthDataPage() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <main>
        <div className="container mx-auto p-4">
          <BirthDataForm />
          <Suspense>
            <Admin />
          </Suspense>
        </div>
      </main>
    </div>
  )
}

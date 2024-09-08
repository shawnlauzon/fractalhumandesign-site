'use server'

import { ChartData } from '@/types/ChartData'
import { SimpleChartData } from '@/types/SimpleChart'
import { User } from '@/types/User'

export async function sendChart(data: ChartData, user: User) {
  if (data) {
    const localHeaders = new Headers()
    localHeaders.append('Content-Type', 'application/json')

    // Store user and chart
    const storeUserResp = await fetch(
      `${process.env.BASE_URL_NEXT_PUBLIC_}/api/store-user`,
      {
        method: 'POST',
        headers: localHeaders,
        body: JSON.stringify(Object.assign({}, user)),
      },
    )
    const newUser = await storeUserResp.json()
    console.log('newUser', newUser)

    const storeChartResp = await fetch(
      `${process.env.BASE_URL_NEXT_PUBLIC_}/api/store-chart`,
      {
        method: 'POST',
        headers: localHeaders,
        body: JSON.stringify({
          userId: newUser.id,
          chart: data.chart,
          meta: data.meta,
        }),
      },
    )

    const newChart = (await storeChartResp.json()) as SimpleChartData
    console.log('Chart stored', newChart)

    // Now send it
    await fetch(`${process.env.BASE_URL_NEXT_PUBLIC_}/api/email-chart`, {
      method: 'POST',
      headers: localHeaders,
      body: JSON.stringify({
        chartId: newChart.id,
        email: user.email,
        firstName: user.firstName,
      }),
    })
    console.log('Chart sent')
  }
}

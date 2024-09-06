'use server'

import { ChartData } from '@/types/ChartData'
import { User } from '@/types/User'

export async function storeChart(data: ChartData, user: User) {
  if (data) {
    const localHeaders = new Headers()
    localHeaders.append('Content-Type', 'application/json')

    // Store user and chart
    try {
      const storeUserResp = await fetch('/api/store-user', {
        method: 'POST',
        headers: localHeaders,
        body: JSON.stringify(Object.assign({}, user)),
      })
      const newUser = await storeUserResp.json()
      console.log('newUser', newUser)

      const storeChartResp = await fetch('/api/store-chart', {
        method: 'POST',
        headers: localHeaders,
        body: JSON.stringify({
          userId: newUser.id,
          chart: data.chart,
          meta: data.meta,
        }),
      })

      const newChart = await storeChartResp.json()
      console.log('newChart', newChart)
      // onChart(newChart.id);
    } catch (e) {
      console.error('Could not save:', e)
    }
  }
}

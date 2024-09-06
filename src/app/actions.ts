'use server'

export async function storeChart(data: any) {
  if (data) {
    const localHeaders = new Headers()
    localHeaders.append('Content-Type', 'application/json')

    // Store user and chart
    try {
      const storeUserResp = await fetch('/api/store-user', {
        method: 'POST',
        headers: localHeaders,
        body: '{}',
      })
      const newUser = await storeUserResp.json()

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
      // onChart(newChart.id);
    } catch (e) {
      console.error('Could not save:', e)
    }
  }
}

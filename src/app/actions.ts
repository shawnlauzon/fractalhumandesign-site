'use server'

import { GuideProps } from '@/types/GuideProps'
import { countries } from '@/utils/countries'

export async function createChart(data: GuideProps) {
  //   setSubmitting(true)

  const maiaHeaders = new Headers()
  maiaHeaders.append('Calculator-Token', process.env.NEXT_PUBLIC_MAIA_API_KEY!)
  maiaHeaders.append('Content-Type', 'application/json')

  const raw = JSON.stringify({
    tzData: {
      country: data.countryAbbr,
      city: data.city,
      timezone: data.timezone,
      timeInUtc: false,
      time: `${data.date}T${data.time}:00Z`,
    },
    data: {
      city: {
        name: data.city,
        timezone: data.timezone,
        tz: data.timezone,
      },
      country: {
        id: data.countryAbbr,
        name: countries.find((c) => c.abbr === data.countryAbbr)?.name,
        tz: null,
      },
      date: `${data.date}T00:00:00.000Z`,
      time: `1970-01-01T${data.time}:00.000Z`,
    },
  })
  console.log('raw', raw)

  try {
    const response = await fetch(
      'https://app.maiamechanics.com/api-v2/api/web-calculator/server-side-generation',
      {
        method: 'POST',
        headers: maiaHeaders,
        body: raw,
        redirect: 'follow',
      },
    )

    if (!response.ok) {
      let error
      try {
        error = await response.json()
      } catch (e) {
        // ignore
      }
      throw new Error(
        `HTTP error, status = ${response.status}: ${response.statusText} => ${JSON.stringify(error)}`,
      )
    }

    const respData = await response.json()

    if (respData.chart) {
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
            chart: respData.chart,
            meta: respData.meta,
          }),
        })

        const newChart = await storeChartResp.json()
        // onChart(newChart.id);
      } catch (e) {
        console.error('Could not save:', e)
      }
    }
  } catch (error) {
    console.error('Error during chart generation:', error)
  } finally {
    // setSubmitting(false)
  }
}

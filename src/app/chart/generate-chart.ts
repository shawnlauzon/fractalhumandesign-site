'use client'

import { GuideProps } from '@/types/GuideProps'
import { MaiaMechanicsResponse } from '@/types/MaiaMechanicsResponse'
import { countries } from '@/utils/countries'

// Note that normally this would be a server function, but MMI requires that
// it is called from the client
export async function generateChart(data: GuideProps) {
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

    const respData = (await response.json()) as MaiaMechanicsResponse

    return respData
  } catch (error) {
    console.error('Error during chart generation:', error)
    throw error
  } finally {
    // setSubmitting(false)
  }
}

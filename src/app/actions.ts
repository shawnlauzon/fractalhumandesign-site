'use server'

import { Chart } from '@/types/Chart'
import { ChartData } from '@/types/ChartData'
import { Meta } from '@/types/Meta'
import { User, UserData } from '@/types/User'
import { revalidatePath } from 'next/cache'

export type StoreChartProps = {
  userId: string
  chart: ChartData
  meta: Meta
}

export type SendWelcomeEmailProps = {
  user: User
  chartId: string
}

const headers = new Headers()
headers.append('Content-Type', 'application/json')

export async function storeUser(user: UserData) {
  // Store user and chart
  const storeUserResp = await fetch(
    `https://${process.env.HOST}/api/store-user`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify(Object.assign({}, user)),
    },
  )
  const newUser = (await storeUserResp.json()) as User
  console.log('newUser', newUser)
  return newUser
}

export async function storeChart({ userId, chart, meta }: StoreChartProps) {
  const storeChartResp = await fetch(
    `https://${process.env.HOST}/api/store-chart`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify({
        userId,
        chart,
        meta,
      }),
    },
  )

  const newChart = (await storeChartResp.json()) as Chart
  console.log('Chart stored', newChart)

  // Get fresh data next time looking at /admin view
  revalidatePath('/admin')

  return newChart
}

export async function sendWelcomeEmail({
  user,
  chartId,
}: SendWelcomeEmailProps) {
  await fetch(`https://${process.env.HOST}/api/email-chart`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      chartId,
      email: user.email,
      firstName: user.firstName,
    }),
  })
  console.log('Chart sent')
}

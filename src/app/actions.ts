'use server'

import { Chart } from '@/types/Chart'
import { ChartContent } from '@/types/ChartContent'
import { Meta } from '@/types/Meta'
import { User, UserData } from '@/types/User'
import { Client, fql } from 'fauna'
import { revalidatePath } from 'next/cache'
import * as postmark from 'postmark'

export type StoreChartProps = {
  userId: string
  chart: ChartContent
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
    `${process.env.SERVER_URL}/api/store-user`,
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
    `${process.env.SERVER_URL}/api/store-chart`,
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
  const postmarkClient = new postmark.ServerClient(
    process.env.POSTMARK_API_KEY!,
  )

  // When the user opens this email, Postmark will send a POST request to /api/email-open
  // which will then set the user's isEmailVerified to true and start the rest of the
  // welcome sequence
  const emailData = {
    From: 'Shawn at Fractal Human Design <shawn@fractalhumandesign.com>',
    To: user.email,
    TemplateAlias: 'welcome',
    TemplateModel: {
      product_url: 'https://fractalhumandesign.com',
      product_name: 'Fractal Human Design',
      action_url: `https://fractalhumandesign.com/chart/${chartId}`,
      name: user.firstName,
      support_email: 'help@fractalhumandesign.com',
      sender_name: 'Shawn Lauzon',
      company_name: 'Quantum Connecting Technologies Inc',
      company_address: '1800 W 68th St. Suite 118, Hialeah, FL  33014',
    },
  }
  console.log('Sending', emailData)

  const emailResponse = await postmarkClient.sendEmailWithTemplate(emailData)
  console.log('emailResponse', emailResponse)

  if (emailResponse.ErrorCode === 0) {
    const client = new Client({
      secret: process.env.FAUNADB_SERVER_SECRET,
    })
    try {
      await client.query(
        fql`User.byId(${user.id})!.update({ welcomeEmailStepSent: 0 })`,
      )
    } finally {
      client.close()
    }
  } else {
    console.error('Error sending welcome email', emailResponse)
  }
}

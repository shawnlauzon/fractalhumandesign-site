import { ChartContent } from '@/types/ChartContent'
import hdChart from '@/utils/hd-chart'
import { Section, Text } from '@react-email/components'
import React from 'react'
import { ReactEmail } from './ReactEmail'

interface EmailProps {
  chart: ChartContent
}

export const IntroCoupon: React.FC<EmailProps> = ({ chart }) => {
  return (
    <ReactEmail title="">
      <Body chart={chart} />
    </ReactEmail>
  )
}

const Body: React.FC<EmailProps> = ({ chart }) => {
  const hd = hdChart(chart)
  return (
    <Section>
      <Text className="mt-[8px] text-[16px] leading-[24px]"></Text>
    </Section>
  )
}

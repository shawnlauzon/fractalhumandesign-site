import { Heading, Img, Row, Section, Text } from '@react-email/components'
import { ReactNode } from 'react'

export function RaQuote({ children }: { children: ReactNode }) {
  return (
    <Section className="w-[85%]">
      <Section>
        <Text className="font-semibold text-gray-900">"{children}"</Text>
      </Section>
      <Row>
        <Section className="mt-[5px] inline-block max-h-[48px] max-w-[48px] text-left">
          <Img
            alt="Ra Uru Hu headshot"
            className="block h-[48px] w-[48px] rounded-full object-cover object-center"
            src="https://fractalhumandesign.s3.amazonaws.com/site/images/ra-uru-hu-headshot.jpg"
          />
        </Section>
        <Section className="ml-[18px] inline-block max-w-[120px] text-left align-top">
          <Heading
            as="h3"
            className="m-[0px] text-[14px] font-medium leading-[20px] text-gray-800"
          >
            Ra Uru Hu
          </Heading>
          <Text className="m-[0px] text-[12px] font-medium leading-[14px] text-gray-500">
            Human Design Founder
          </Text>
        </Section>
      </Row>
    </Section>
  )
}

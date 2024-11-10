import { SimpleChartData } from '@/types/SimpleChart'
import hdChart from '@/utils/hd-chart'
import {
  Container,
  Head,
  Heading,
  Html,
  Img,
  Tailwind,
} from '@react-email/components'
import React from 'react'
import { CareerTypeTable } from './CareerTypeTable'
import { RaQuote } from './RaQuote'
import {
  careerNotSelfWriteups,
  careerTips,
  careerWriteups,
  raQuotes,
} from './WelcomeCampaignText'

interface WelcomeCampaignEmailProps {
  chart: SimpleChartData
}

const WelcomeCampaignEmail1: React.FC<WelcomeCampaignEmailProps> = ({
  chart,
}) => {
  const hd = hdChart(chart.chart)

  return (
    <Html lang="en">
      <Tailwind>
        <Head />
        <Container>
          <Img src="https://fractalhumandesign.s3.amazonaws.com/site/images/fhd-flow-guide-email-header.png" />
          <Heading
            as="h2"
            className="mt-16 text-2xl font-bold tracking-tight text-gray-900"
          >
            Success Code 1: Career Type
          </Heading>

          <p className="mt-8">
            We start with a look at the type of career which most aligns with
            your unique nature. Broadly speaking there are four different types
            of careers. None of them are more important than others, and each is
            critical to the process of creation.
          </p>

          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <CareerTypeTable />
              </div>
            </div>
          </div>
          <p className="mt-8">
            Each career type has positive and more challenging aspects, based on
            their individual nonverbal energy. Since it is based on what is
            intrinsically you, rather than personal skills or preferences, it's
            more integral than the "career guidance" you might have received in
            high school. When working in alignment with your broad career type,
            you're more likely to feel in flow.
          </p>
          <p className="mt-6">
            Unfortunately people try to be a type they are not. For example, the
            coaching industry (an Advisor-style career) has seen massive growth,
            leading some Builders (myself included) to try to teach others
            rather than looking to do what they love. Builders who do this are
            frequently frustrated. Meanwhile when Advisors, who don't have the
            same consistent level of energy as Builders do, try to keep up with
            Builders, they will tend to feel exhausted.
          </p>
          <p className="mt-6">
            Now that you have a general sense of the types, we can talk about
            you specifically:
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <span>
                <strong className="font-semibold text-gray-900">
                  👉 Career Type.{' '}
                </strong>
                You are a{' '}
                <b>
                  <em>{hd.careerDesign()}</em>
                </b>
                , also known as a {hd.type()}.
              </span>
            </li>
          </ul>
          <p className="mt-8">{careerWriteups.get(hd.type())}</p>
          <RaQuote>{raQuotes.get(hd.type())}</RaQuote>
          <p className="mt-8">{careerNotSelfWriteups.get(hd.type())}</p>
          <p className="mt-6">{careerTips.get(hd.type())}</p>

          {hd.type() === 'Manifesting Generator' && (
            <>
              <p className="mt-6">
                BTW, many people are confused by what exactly is a "Manifesting
                Generator", which is why we use the them "Express Builder"
                instead. Just to be clear:
              </p>
              <RaQuote>
                [A] Manifesting Generator is a Generator with manifesting
                potential ... A Generator is a Generator is a Generator. It is
                about response. The power of the Manifesting Generator is the
                quality of energy that they can put to any task.
              </RaQuote>
              <p className="mt-8">
                The biggest difference in practice is that when building,
                Express Builders tend to skip steps while Classic Builders are
                more methodical.
              </p>
            </>
          )}

          <p className="mt-8">
            That's it for today. Tomorrow you'll learn your personal way to make
            decisions that you can trust. See you then!
          </p>
        </Container>
      </Tailwind>
    </Html>
  )
}

export { WelcomeCampaignEmail1 }

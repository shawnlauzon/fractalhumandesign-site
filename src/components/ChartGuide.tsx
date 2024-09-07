import PersonalizedGuide from '@/components/PersonalizedGuide'
import puzzleFittingIn from '@/images/puzzle-fitting-in.webp'
import { InformationCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { Button } from './Button'
import ChartImage from './ChartImage'

interface ChartGuideProps {
  chartId: string
}

// Fetch data from the server
async function fetchChartData(chartId: string) {
  const response = await fetch(
    `${process.env.BASE_URL}/api/get-chart?id=${chartId}`,
    {
      cache: 'no-store', // Prevent caching to always fetch fresh data
    },
  )

  if (!response.ok) {
    throw new Error('Failed to fetch chart data')
  }

  return response.json()
}

export default async function ChartGuide({ chartId }: ChartGuideProps) {
  const chartData = await fetchChartData(chartId)
  const { user, chart, meta } = chartData
  const birthTime = meta?.birthData?.time?.utc
  const firstName = user?.firstName
  const lastName = user?.lastName

  return (
    <div className="bg-white px-6 py-8 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-sky-600">
          Crafted for {firstName} {lastName}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Your Personal Guide for Flow
        </h1>
        <p className="mt-6 text-xl leading-8">
          Congratulations on taking the first step to understanding yourself and
          how absolutely, incredibly unique you are. The goal here is to give
          you some basic knowledge that will help you live a life in alignment
          with your authentic self.
        </p>
        <p className="mt-8">
          Some of what is shared here you might resonate with, and others not so
          much. This is normal: most of us have been conditioned for years to be
          someone that we aren't, and so it can be hard to recognize our true
          nature.
        </p>
        <p className="mt-8">
          Why would this be? Well our parents, doing their best, wanted to guide
          us with what they have learned is best for themselves. Unfortunately,
          what worked for them will very likely not be the best for us. But
          still, our parents are our only source of love, and so we will do
          absolutely anything to not lose their love. Even that means going
          against our very nature. And this "fitting in" process happens at
          home, at school, when we're looking for a job, or for a partner.
        </p>
        <figure className="mt-16">
          <Image
            src={puzzleFittingIn}
            alt="Puzzle cutting himself to fit in "
            className="aspect-auto rounded-xl bg-gray-50 object-cover"
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon
              aria-hidden="true"
              className="mt-0.5 h-5 w-5 flex-none text-gray-300"
            />
            Don't change yourself to try to fit in.
          </figcaption>
        </figure>
        <p className="mt-8">
          Human Design gives us tools to let go of the conditioning we have
          received from all those people in our life, both those trying to help
          us or do us harm. These tools bring us back to our true nature on this
          planet: that each of us are completely individual and here to follow
          what is right for us.
        </p>
        <p className="mt-8">
          One final note to keep in mind: treat everything you read here as an
          opportunity to experiment. You can't do anything wrong! Furthermore,
          everything you see here might not be exactly right for you,
          <em>right now</em>. The invitation is for you to try something, so how
          it works for you, and then keep it or leave it, perhaps coming back to
          it later.
        </p>
        <p className="mt-8">
          Enjoy the process. Let go of what you <em>think</em> you need to do
          and relax into what feels natural.
        </p>

        <div className="mt-10 max-w-2xl">
          <PersonalizedGuide chart={chart} />
        </div>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
          Where did all this come from?
        </h2>

        <p className="mt-6">
          Human Design is based on many things, one of them being astrology.
          When you entered your birth info, we created this chart, and all the
          information above comes from reading the chart. It can be
          overwhelming, and so we have done the hard work for you and broken
          down into pieces that you can immediately put to good use.
        </p>

        <figure className="mt-16">
          <ChartImage birthTime={birthTime} />
        </figure>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
          To learn more
        </h2>

        <p className="mt-6">
          You don't need anything else to get started. Simply by following your
          decision-making strategy, you will begin to have more flow in your
          life.
        </p>
        <p className="mt-8">
          If you'd like personalized guidance, let's talk! Simply tap the button
          below and choose the time that works best for you.
        </p>
        <div className="mt-4 flex items-center gap-x-5 md:gap-x-8">
          <Button
            href="https://calendly.com/fractalhumandesign/quick"
            color="sky"
          >
            <span>Book a call</span>
          </Button>
        </div>
        <p className="mt-6">
          We look forward to guiding you to a life of more magic and flow.
        </p>
      </div>
    </div>
  )
}

{
  /* {birthTime && chart && (
        <div className="mx-auto flex max-w-3xl flex-col px-2">
          <div>
            <h2 className="text-xl font-semibold">Your chart</h2>
            <p>
              As you can see, your chart is much more complex than what we can
              go through here. Want personal support? Book a personal session
              and let's work together to create the life you desire.
            </p>
            <Button href="https://calendly.com/fractalhumandesign/quick">
              <a className="mb-8 mt-2 block rounded-lg bg-pink-600 py-3 text-center font-bold text-white">
                Book a free call
              </a>
            </Button>
          </div>
        </div>
      )}

      <div className="mx-auto flex flex-wrap">
        <div className="w-full px-2 sm:w-7/12">
          <ChartImage birthTime={birthTime} />
        </div>
      </div>
    </div> */
}

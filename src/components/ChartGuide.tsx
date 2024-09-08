import PersonalizedGuide from '@/components/PersonalizedGuide'
import fairSelection from '@/images/fair-selection.webp'
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
    `${process.env.BASE_URL_NEXT_PUBLIC_}/api/get-chart?id=${chartId}`,
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
      <div className="mx-auto max-w-2xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-sky-600">
          Crafted for {firstName} {lastName}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Your Personal Guide for Flow
        </h1>
        <p className="mt-8 text-xl leading-8">
          Congratulations on taking the first step to understanding yourself and
          how absolutely, incredibly unique you are! My goal is to give you some
          basic wisdom to help you live a life in alignment with your authentic
          self.
        </p>
        <p className="mt-6">
          Some of what you read might resonate with you, and others not so much.
          This is normal: most of us have been conditioned over time to be
          someone we aren't, and so it can be hard to recognize our true nature.
        </p>
        <p className="mt-6">
          Why is that? Well our parents, doing their best, wanted to guide us by
          their own experiences. Unfortunately, what worked for them is often
          different from what we need. We are all different! But our parents,
          they being our only source of love as a child, we would do absolutely
          anything not lose it ... even if that means going against our very
          nature. And this process of "fitting in" repeats itself at school,
          when we're looking for a job, or looking a partner.
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
            Check out the fake smile and bags under his eyes in the last panel
            🥺
          </figcaption>
        </figure>
        <p className="mt-8">
          Human Design gives us tools to let go of this conditioning from all
          these influences, both those trying to help us or do us harm. These
          tools bring us back to our true nature: that each of these bodies are
          different and how to trust the guidance we receive daily.
        </p>
        <p className="mt-6">
          One final suggestion: treat everything you read here as an opportunity
          to experiment. Try it out, see how it works, and then take it or leave
          it; don't believe anything that anyone tells you, even what you read
          here! Enjoy the process. Let go of what you <em>think</em> you need to
          do and relax into your body's wisdom.
        </p>

        <div className="mt-10">
          <PersonalizedGuide chart={chart} />
        </div>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
          In conclusion
        </h2>

        <figure className="mt-16">
          <Image
            src={fairSelection}
            alt="Fair selection test"
            className="aspect-auto rounded-xl bg-gray-50 object-cover"
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon
              aria-hidden="true"
              className="mt-0.5 h-5 w-5 flex-none text-gray-300"
            />
            What happens when we all try to play by the same rules.
          </figcaption>
        </figure>
        <p className="mt-8">
          You have the strengths needed to be successful. Your strengths are
          different from other people's, and so it can be easy to compare with
          others and want what they have. But Human Design shows us how we are
          unique and that there's absolutely no point comparing yourself to
          anyone else. It's like comparing yourself to a cheetah: it's not your
          fault that you can't run as fast.
        </p>

        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
          To learn more
        </h2>

        <p className="mt-8">
          You don't need anything else to get started. Simply by following your
          decision-making strategy, you will begin to have more flow in your
          life.
        </p>
        <p className="mt-6">
          However, some people get massive value by hearing it directly from
          someone who has been practicing it for years. I am available to answer
          any questions you might have, and to share more individual guidance
          based on your chart.
        </p>
        <figure className="mt-16">
          <ChartImage birthTime={birthTime} />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon
              aria-hidden="true"
              className="mt-0.5 h-5 w-5 flex-none text-gray-300"
            />
            Your personal chart
          </figcaption>
        </figure>

        <p className="mt-8">
          People study the system for years and only begin to understand all the
          nuances. Even this chart, which is quite detailed, leaves out much of
          the more detailed information. You now have the informaetion you need
          to go down the rabbit hole yourself. Or if you'd like to save some
          time, tap the button below and let's connect: I'd love to hear from
          you.
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
          Looking forward to guiding you in a life of more magic and flow.
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

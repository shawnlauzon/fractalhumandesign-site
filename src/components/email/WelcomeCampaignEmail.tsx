import { SimpleChartData } from '@/types/SimpleChart'
import hdChart from '@/utils/hd-chart'
import {
  Button,
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
  authorityTips,
  authorityWriteups,
  careerNotSelfWriteups,
  careerTips,
  careerWriteups,
  raQuotes,
  strategyWriteups,
} from './WelcomeCampaignText'

interface WelcomeCampaignEmailChooserProps {
  emailIndex: number
  chart: SimpleChartData
}

interface WelcomeCampaignEmailProps {
  chart: SimpleChartData
}

export const WelcomeCampaignEmailChooser: React.FC<
  WelcomeCampaignEmailChooserProps
> = ({ emailIndex, chart }) => {
  switch (emailIndex) {
    case 1:
      return <WelcomeCampaignEmail1 chart={chart} />
    case 2:
      return <WelcomeCampaignEmail2 chart={chart} />
    case 3:
      return <WelcomeCampaignEmail3 chart={chart} />
    case 4:
      return <WelcomeCampaignEmail4 chart={chart} />
    case 5:
      return <WelcomeCampaignEmail5 chart={chart} />
    default:
      return <WelcomeCampaignEmail1 chart={chart} />
  }
}

export const WelcomeCampaignEmail1: React.FC<WelcomeCampaignEmailProps> = ({
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

export const WelcomeCampaignEmail2: React.FC<WelcomeCampaignEmailProps> = ({
  chart,
}) => {
  const hd = hdChart(chart.chart)

  return (
    <Html lang="en">
      <Tailwind>
        <Head />
        <Container>
          <Img src="https://fractalhumandesign.s3.amazonaws.com/site/images/fhd-flow-guide-email-header.png" />
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Success Code 2: Personal Interaction Style
          </h2>
          <p className="mt-8">
            Each of the types has a different way of moving though life. Living
            according to your design means to stop trying to make things happen
            from the <em>mind</em> ("I should ..."), and instead allow the
            unique wisdom of the <em>body</em> to guide you in daily activities.
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <span>
                <strong className="font-semibold text-gray-900">
                  👉 Personal Interaction Style.{' '}
                </strong>
                Your personal style is to{' '}
                <b>
                  <em>{hd.strategy()}</em>
                </b>
                .
              </span>
            </li>
          </ul>
          <p className="mt-8">{strategyWriteups.get(hd.strategy())}</p>

          {hd.type() !== 'Manifestor' && (
            <>
              <p className="mt-6">
                You're probably not used to so much waiting. You might even feel
                that if you're not actively doing something, you're falling
                behind. Or maybe even feel like you're being lazy! But waiting
                is not just sitting around, waiting for something to happen.
                It's an active state of awareness. Rather than running around
                and DOING, it's more of a state of BEING. And then doing what
                you want, what makes you happy, or even something which brings
                you {hd.signatureTheme()}.
              </p>

              <RaQuote>
                So many people think that waiting is a stagnant sort of dead
                space. You know, nothing is happening, nothing is going on,
                nothing's ever going on ... It doesn't mean that nothing is
                going on. Waiting can be translated as a higher state of
                alertness ... It is a state of awareness. It is being present.
                It is being ready for precisely those things that you're
                actually waiting for, waiting for that perfect stimulation that
                is going to allow you to operate correctly, to make a decision
                correctly, because you're present here now, waiting you.
              </RaQuote>
            </>
          )}
          <p className="mt-8">{strategyWriteups.get(hd.strategy())}</p>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qvnRU2tdNXM?si=ohnOgZoKe48ehhqk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <p className="mt-6">
            After you {hd.strategy()}, you still need to determine if this is
            something to take action on. That's next.
          </p>

          <p className="mt-8">
            That'll do it for the first part of the decision-making strategy.
            Tomorrow we'll cover the second part, which is how to know if you
            should take action On something. See you then!
          </p>
        </Container>
      </Tailwind>
    </Html>
  )
}

export const WelcomeCampaignEmail3: React.FC<WelcomeCampaignEmailProps> = ({
  chart,
}) => {
  const hd = hdChart(chart.chart)

  return (
    <Html lang="en">
      <Tailwind>
        <Head />
        <Container>
          <Img src="https://fractalhumandesign.s3.amazonaws.com/site/images/fhd-flow-guide-email-header.png" />
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Success Code 3: Your Decision-Making Strategy
          </h2>
          <p className="mt-8">
            We all have decisions to make: should I work with this person or
            not, should I date or marry this person. By following the{' '}
            <em>decision-making strategy</em>, we let go of the old patterns
            which have controlled us in the past, and move towards a new way of
            being which is authentically ourself. This is not an instant fix; it
            can take years to completely let go of these destructive patterns.
            But the payoff is worth it: a life without {hd.notSelfTheme()} and a
            nearly effortless way of being.
          </p>

          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <span>
                <strong className="font-semibold text-gray-900">
                  👉 Decision-Making Strategy.{' '}
                </strong>
                Your way to make decisions is to{' '}
                <b>
                  <em>{hd.authorityDescription()}</em>
                </b>
                .
              </span>
            </li>
          </ul>
          <p className="mt-8">{authorityWriteups.get(hd.authority())}</p>
          <p className="mt-6">{authorityTips.get(hd.authority())}</p>

          <figure className="mt-16">
            <Img
              alt="Star Wars Mandalorian - This is the way"
              src="https://fractalhumandesign.s3.amazonaws.com/site/images/this-is-the-way.jpg"
              width={600}
              className="aspect-video rounded-xl bg-gray-50 object-cover"
            />
            <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
              Your decision-making strategy, to {hd.decisionMakingStrategy()},
              is your way.
            </figcaption>
          </figure>

          <p className="mt-8">
            This brings us to a core teaching of Human Design: the mind is never
            the way to make decisions. It is a tool, and this tool is ideal for
            processing information and considering different options. But not
            for making decision. However, it will continually try to persuade
            you into ignoring your body, complaining "you're not being logical".
            Just let it go.{' '}
          </p>
          <p className="mt-6">
            Remember, your mind is the result of decades of conditioning from
            parents, teachers, coaches, society, advertising: everyone telling
            you what <em>they think</em> you should do, when they don't even
            know you. And aren't you just sick of it?!?
          </p>
          <p className="mt-6">
            That's where Human Design fits in. This simple decision-making
            strategy, to {hd.decisionMakingStrategy()}, you will let go of the
            mental chatter and begin to hear your true nature. Because this is
            always a part of you, your genetic birthright, it is something you
            can always depend on begin to make <b>decisions you can trust</b>.
          </p>
          <p className="mt-8">
            Congratulations! We've covered a lot in a short amount of time. You
            now know how you can make decisions you can trust, and can begin to
            let go of depending on others for guidance. Tomorrow we'll give you
            some useful indicators that you can use to understand if you're
            on-track or off-track. See you then!
          </p>
        </Container>
      </Tailwind>
    </Html>
  )
}

export const WelcomeCampaignEmail4: React.FC<WelcomeCampaignEmailProps> = ({
  chart,
}) => {
  const hd = hdChart(chart.chart)

  return (
    <Html lang="en">
      <Tailwind>
        <Head />
        <Container>
          <Img src="https://fractalhumandesign.s3.amazonaws.com/site/images/fhd-flow-guide-email-header.png" />
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Success Code 4: Your Key Indicators
          </h2>
          <p className="mt-8">
            For many people, all this talk about decision making process can
            feel a bit ungrounded. How do you see progress? How do you know if
            these changes that you're making have an impact?
          </p>
          <p className="mt-6">
            Thankfully, there's a simple way of knowing whether you are on-track
            or off-track. Look back at your day and notice if you have more{' '}
            {hd.notSelfTheme()} than {hd.signatureTheme()}.
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="mt-6 flex gap-x-3">
              <span>
                <strong className="font-semibold text-gray-900">
                  👉 Resistance indicator.{' '}
                </strong>
                You're off-track when feeling{' '}
                <b>
                  <em>{hd.notSelfTheme()}</em>
                </b>
                .
              </span>
            </li>
          </ul>
          <p className="mt-8">
            You might have had a lot of {hd.notSelfTheme()} in your life. This
            is a sign that you are attempting to do something that{' '}
            <b>doesn't align with your core nature</b>. When you consistently do
            things that make you {hd.notSelfThemeAdjective()}, you will find
            yourself increasingly drained of energy.
          </p>
          <p className="mt-6">
            When you find yourself {hd.notSelfThemeAdjective()}, think about how
            you decided to do this activity: is it something that you thought
            you <i>should do</i>? Or is it something you actually wanted to do?
            Remember, making decisions from the head (typically "I should"
            language) is never the right way.
          </p>
          <p className="mt-6">
            Interestingly, actively attempting to avoid being{' '}
            {hd.notSelfThemeAdjective()} can itself cause it! When you think to
            yourself "oh, I don't want to feel {hd.notSelfThemeAdjective()}" and
            so let me just avoid it all together, how do you feel? Probably even
            more {hd.notSelfThemeAdjective()} than before! The only thing to do
            is to {hd.decisionMakingStrategy()}.
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="mt-6 flex gap-x-3">
              <span>
                <strong className="font-semibold text-gray-900">
                  👉 Flow indicator.{' '}
                </strong>
                You're on-track when feeling{' '}
                <b>
                  <em>{hd.signatureTheme()}</em>
                </b>
                .
              </span>
            </li>
          </ul>
          <p className="mt-8">
            On the other hand, when you feel {hd.signatureThemeAdjective()}, you
            are doing something right. You likely feel in the flow, like things
            are going your way. Rather than focusing on money, fame, or power,
            look for feelings of {hd.signatureTheme()} in your life. As you feel
            more {hd.signatureThemeAdjective()} and less{' '}
            {hd.notSelfThemeAdjective()}, you'll find yourself moving more often
            with ease and joy.
          </p>
          <p className="mt-6">
            If you can only remember one thing, this is it. By living life in
            this manner, you will{' '}
            <b>
              move from {hd.notSelfTheme()} to {hd.signatureTheme()}
            </b>
            . Look back at the things that cause you to get{' '}
            {hd.notSelfThemeAdjective()}: did you {hd.authorityDescription()} or
            did you make a decision based on what your mind thought you should
            do?
          </p>

          <p className="mt-8">
            And that wraps up the teaching content for this series. Tomorrow
            we'll wrap things up with some final words of wisdom, and what are
            the next steps if you'd like to consider the journey.
          </p>
        </Container>
      </Tailwind>
    </Html>
  )
}

export const WelcomeCampaignEmail5: React.FC<WelcomeCampaignEmailProps> = ({
  chart,
}) => {
  const hd = hdChart(chart.chart)

  return (
    <Html lang="en">
      <Tailwind>
        <Head />
        <Container>
          <Img src="https://fractalhumandesign.s3.amazonaws.com/site/images/fhd-flow-guide-email-header.png" />
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            In conclusion
          </h2>

          <p className="mt-8">
            We've gone through a bunch of stuff. Boiling it all down to a single
            statement gives us this:
          </p>

          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="mt-6 flex gap-x-3">
              <span>
                <strong className="font-semibold text-gray-900">
                  👉 In one line.{' '}
                </strong>
                Pause - observe - {hd.decisionMakingStrategy()}. This brings
                more {hd.signatureTheme()} and less {hd.notSelfTheme()}.
              </span>
            </li>
          </ul>

          <p className="mt-8">
            Simple, but not always easy. It takes a lifetime to fully integrate
            this into your way of being. The effort is totally worth it! You'll
            find yourself moving through life with more ease and flow, and less
            resistance.
          </p>

          <figure className="mt-16">
            <Img
              src="https://fractalhumandesign.s3.amazonaws.com/site/images/comic-fair-selection.png"
              alt="Fair selection test"
              className="aspect-auto rounded-xl bg-gray-50 object-cover"
            />
            <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
              What happens when we all try to play by the same rules.
            </figcaption>
          </figure>
          <p className="mt-8">
            You have the strengths needed to be successful. Your strengths are
            different from other people's, and so it can be easy to compare with
            others and want what they have. But Human Design shows us how we are
            unique and that there's absolutely no point comparing yourself to
            anyone else. It's like comparing yourself to a cheetah: it's not
            your fault that you can't run as fast.
          </p>

          <Heading
            as="h3"
            className="mt-16 text-2xl font-bold tracking-tight text-gray-900"
          >
            To learn more
          </Heading>

          <p className="mt-8">
            You don't need anything else to get started. Simply by following
            your decision-making strategy, you will begin to have more flow in
            your life.
          </p>
          <p className="mt-6">
            However, some people get massive value by hearing it directly from
            someone who has been practicing it for years. I am available to
            answer any questions you might have, and to share more individual
            guidance based on your chart.
          </p>
          <figure className="mt-16">
            {/* TODO <ChartImage birthTime={chart.meta.birthData.time.utc} /> */}
            <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
              Your personal chart
            </figcaption>
          </figure>

          <p className="mt-8">
            People study the system for years and only begin to understand all
            the nuances. Even this chart, which is quite detailed, leaves out
            much of the more detailed information. You now have the information
            you need to go down the rabbit hole yourself. Or if you'd like to
            save some time, tap the button below and let's connect: I'd love to
            hear from you.
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
        </Container>
      </Tailwind>
    </Html>
  )
}

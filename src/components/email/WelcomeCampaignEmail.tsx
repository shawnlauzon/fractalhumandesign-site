import { ChartContent, HdAuthority, HdType } from '@/types/ChartContent'
import hdChart, {
  authorityVideos,
  projectorEmotionalAuthority,
  signatureVideos,
  sleepAloneProjectors,
  strategyVideoMG,
  strategyVideos,
  typeButtonGifs,
  typeVideos,
} from '@/utils/hd-chart'
import {
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components'
import React from 'react'
import { Footer } from '../Footer'
import { CareerTypeTable } from './CareerTypeTable'
import { RaQuote } from './RaQuote'
import { Signature } from './Signature'
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
  chart: ChartContent
}

interface WelcomeCampaignEmailProps {
  chart: ChartContent
}

export const WelcomeCampaignEmailChooser: React.FC<
  WelcomeCampaignEmailChooserProps
> = ({ emailIndex, chart }) => {
  return (
    <Html lang="en">
      <Tailwind>
        <Head />
        <Preview>Fractal Human Design - Welcome to the flow</Preview>
        <Container className="bg-sky-50 p-[32px]">
          <Img src="https://fractalhumandesign.s3.amazonaws.com/site/images/fhd-flow-guide-email-header.png" />
          {emailIndex == 1 ? (
            <WelcomeCampaignEmail1 chart={chart} />
          ) : emailIndex == 2 ? (
            <WelcomeCampaignEmail2 chart={chart} />
          ) : emailIndex == 3 ? (
            <WelcomeCampaignEmail3 chart={chart} />
          ) : emailIndex == 4 ? (
            <WelcomeCampaignEmail4 chart={chart} />
          ) : emailIndex == 5 ? (
            <WelcomeCampaignEmail5 chart={chart} />
          ) : (
            <WelcomeCampaignEmail1 chart={chart} />
          )}
          <Signature />
          <Hr className="my-[16px] !border-gray-400" />
          <Footer />
        </Container>
      </Tailwind>
    </Html>
  )
}

export const WelcomeCampaignEmail1: React.FC<WelcomeCampaignEmailProps> = ({
  chart,
}) => {
  const hd = hdChart(chart)

  return (
    <>
      <Text className="mt-[8px] text-[16px] leading-[24px]">
        We start with a look at the type of career which most aligns with your
        unique nature. Broadly speaking there are four different types of
        careers. None of them are more important than others, and each is
        critical to the process of creation.
      </Text>
      <CareerTypeTable />
      <Text className="mt-[8px] text-[16px] leading-[24px]">
        Each career type has positive and more challenging aspects, based on
        their individual nonverbal energy. Since it is based on what is
        intrinsically you, rather than personal skills or preferences, it's more
        integral than the "career guidance" you might have received in high
        school. When working in alignment with your broad career type, you're
        more likely to feel in flow.
      </Text>
      <Text className="mt-[8px] text-[16px] leading-[24px]">
        Unfortunately people try to be a type they are not. For example, the
        coaching industry (an Advisor-style career) has seen massive growth,
        leading some Builders (myself included) to try to teach others rather
        than looking to do what they love. Builders who do this are frequently
        frustrated. Meanwhile when Advisors, who don't have the same consistent
        level of energy as Builders do, try to keep up with Builders, they will
        tend to feel exhausted.
      </Text>
      <Text className="mt-[8px] text-[16px] leading-[24px]">
        Now that you have a general sense of the types, we can talk about you
        specifically:
      </Text>
      <Section>
        <Row>
          <Column className="align-baseline">
            <table className="text-center">
              <td
                align="center"
                className="h-[40px] w-[40px] rounded-full bg-sky-200 p-0"
              >
                <Text className="m-0 font-semibold text-sky-600">1</Text>
              </td>
            </table>
          </Column>
          <Column className="w-[85%]">
            <Text className="m-0 text-[20px] font-semibold leading-[28px] text-gray-900">
              Career Type
            </Text>
            <Text className="m-0 mt-[8px] text-[16px] leading-[24px]">
              You are a{' '}
              <b>
                <em>{hd.careerDesign()}</em>
              </b>
              , also known as a {hd.type()}.
            </Text>
          </Column>
        </Row>
      </Section>

      <Text className="mt-[8px] text-[16px] leading-[24px]">
        {careerWriteups.get(hd.type())}
      </Text>
      <RaQuote>{raQuotes.get(hd.type())}</RaQuote>
      <Text className="mt-[8px] text-[16px] leading-[24px]">
        {careerNotSelfWriteups.get(hd.type())}
      </Text>
      <Section>
        <Link href={typeVideos[chart.type]}>
          <Img src={typeButtonGifs[chart.type]} height={180} width={320} />
          See more about being a {hd.careerDesign()} in this video.
        </Link>
      </Section>
      <Text className="mt-[8px] text-[16px] leading-[24px]">
        {careerTips.get(hd.type())}
      </Text>

      {hd.type() === 'Manifesting Generator' && (
        <>
          <Text className="mt-[8px] text-[16px] leading-[24px]">
            BTW, many people are confused by what exactly is a "Manifesting
            Generator", which is why we use the them "Express Builder" instead.
            Just to be clear:
          </Text>
          <RaQuote>
            [A] Manifesting Generator is a Generator with manifesting potential
            ... A Generator is a Generator is a Generator. It is about response.
            The power of the Manifesting Generator is the quality of energy that
            they can put to any task.
          </RaQuote>
          <Text className="mt-[8px] text-[16px] leading-[24px]">
            The biggest difference in practice is that when building, Express
            Builders tend to skip steps while Classic Builders are more
            methodical.
          </Text>
          <Link href={strategyVideoMG}>
            <Img
              src={typeButtonGifs[HdType.Manifestor]}
              height={180}
              width={320}
            />
            Watch more about how an Express Builder differs from a Classic
            Builder.
          </Link>
        </>
      )}

      <Text className="mt-[8px] text-[16px] leading-[24px]">
        That's it for today. Tomorrow you'll learn your personal way to make
        decisions that you can trust. See you then!
      </Text>
    </>
  )
}

export const WelcomeCampaignEmail2: React.FC<WelcomeCampaignEmailProps> = ({
  chart,
}) => {
  const hd = hdChart(chart)

  return (
    <>
      <Heading
        as="h2"
        className="mt-16 text-2xl font-bold tracking-tight text-gray-900"
      >
        Success Code 2: Personal Interaction Style
      </Heading>
      <Text className="mt-[8px] text-[16px] leading-[24px]">
        Each of the types has a different way of moving though life. Living
        according to your design means to stop trying to make things happen from
        the <em>mind</em> ("I should ..."), and instead allow the unique wisdom
        of the <em>body</em> to guide you in daily activities.
      </Text>

      <Section>
        <Row>
          <Column className="align-baseline">
            <table className="text-center">
              <td
                align="center"
                className="h-[40px] w-[40px] rounded-full bg-sky-200 p-0"
              >
                <Text className="m-0 font-semibold text-sky-600">2</Text>
              </td>
            </table>
          </Column>
          <Column className="w-[85%]">
            <Text className="m-0 text-[20px] font-semibold leading-[28px] text-gray-900">
              Personal Interaction Style
            </Text>
            <Text className="m-0 mt-[8px] text-[16px] leading-[24px]">
              Your personal style is to{' '}
              <b>
                <em>{hd.strategy()}</em>
              </b>
              .
            </Text>
          </Column>
        </Row>
      </Section>

      <Text className="mt-[8px] text-[16px] leading-[24px]">
        {strategyWriteups.get(hd.strategy())}
      </Text>

      {hd.type() !== 'Manifestor' && (
        <>
          <Text className="mt-[8px] text-[16px] leading-[24px]">
            You're probably not used to so much waiting. You might even feel
            that if you're not actively doing something, you're falling behind.
            Or maybe even feel like you're being lazy! But waiting is not just
            sitting around, waiting for something to happen. It's an active
            state of awareness. Rather than running around and DOING, it's more
            of a state of BEING. And then doing what you want, what makes you
            happy, or even something which brings you {hd.signatureTheme()}.
          </Text>

          <RaQuote>
            So many people think that waiting is a stagnant sort of dead space.
            You know, nothing is happening, nothing is going on, nothing's ever
            going on ... It doesn't mean that nothing is going on. Waiting can
            be translated as a higher state of alertness ... It is a state of
            awareness. It is being present. It is being ready for precisely
            those things that you're actually waiting for, waiting for that
            perfect stimulation that is going to allow you to operate correctly,
            to make a decision correctly, because you're present here now,
            waiting you.
          </RaQuote>
        </>
      )}

      <Section>
        <Link href={strategyVideos[chart.type]}>
          <Img src={typeButtonGifs[chart.type]} height={180} width={320} />
          Watch how to {hd.strategy()} in this video.
        </Link>
      </Section>
      <Text className="mt-[8px] text-[16px] leading-[24px]">
        {strategyWriteups.get(hd.strategy())}
      </Text>

      <Text className="mt-[8px] text-[16px] leading-[24px]">
        After you {hd.strategy()}, you still need to determine if this is
        something to take action on. That's next.
      </Text>

      <Text className="mt-[8px] text-[16px] leading-[24px]">
        That'll do it for the first part of the decision-making strategy.
        Tomorrow we'll cover the second part, which is how to know if you should
        take action on something. See you then!
      </Text>
    </>
  )
}

export const WelcomeCampaignEmail3: React.FC<WelcomeCampaignEmailProps> = ({
  chart,
}) => {
  const hd = hdChart(chart)

  return (
    <>
      <Heading
        as="h2"
        className="mt-16 text-2xl font-bold tracking-tight text-gray-900"
      >
        Success Code 3: Your Decision-Making Strategy
      </Heading>

      <Text className="mt-[8px] text-[16px] leading-[24px]">
        We all have decisions to make: should I work with this person or not,
        should I date or marry this person. By following the{' '}
        <em>decision-making strategy</em>, we let go of the old patterns which
        have controlled us in the past, and move towards a new way of being
        which is authentically ourself. This is not an instant fix; it can take
        years to completely let go of these destructive patterns. But the payoff
        is worth it: a life without {hd.notSelfTheme()} and a nearly effortless
        way of being.
      </Text>

      <Section>
        <Row>
          <Column className="align-baseline">
            <table className="text-center">
              <td
                align="center"
                className="h-[40px] w-[40px] rounded-full bg-sky-200 p-0"
              >
                <Text className="m-0 font-semibold text-sky-600">3</Text>
              </td>
            </table>
          </Column>
          <Column className="w-[85%]">
            <Text className="m-0 text-[20px] font-semibold leading-[28px] text-gray-900">
              Decision-Making Strategy
            </Text>
            <Text className="m-0 mt-[8px] text-[16px] leading-[24px]">
              Your way to make decisions is to{' '}
              <b>
                <em>{hd.authorityDescription()}</em>
              </b>
              .
            </Text>
          </Column>
        </Row>
      </Section>

      <Text className="mt-[8px] text-[16px] leading-[24px]">
        {authorityWriteups.get(hd.authority())}
      </Text>
      <Link
        href={
          chart.type === HdType.Projector &&
          chart.authority == HdAuthority.Emotional
            ? projectorEmotionalAuthority
            : authorityVideos[chart.authority]
        }
      >
        <Img src={typeButtonGifs[chart.type]} height={180} width={320} />
        See how to {hd.authorityDescription()} in this video.
      </Link>
      <Text className="mt-[8px] text-[16px] leading-[24px]">
        {authorityTips.get(hd.authority())}
      </Text>

      <Section>
        <Img
          alt="Star Wars Mandalorian - This is the way"
          src="https://fractalhumandesign.s3.amazonaws.com/site/images/this-is-the-way.jpg"
          width={480}
          className="aspect-video rounded-xl bg-gray-50 object-cover"
        />
        <Text className="mt-4 flex gap-x-2 text-sm leading-6">
          Your decision-making strategy, to {hd.decisionMakingStrategy()}, is
          your way.
        </Text>
      </Section>
      <Text className="mt-[8px] text-[16px] leading-[24px]">
        This brings us to a core teaching of Human Design: the mind is never the
        way to make decisions. It is a tool, and this tool is ideal for
        processing information and considering different options. But not for
        making decision. However, it will continually try to persuade you into
        ignoring your body, complaining "you're not being logical". Just let it
        go.
      </Text>
      <Text className="mt-[8px] text-[16px] leading-[24px]">
        Remember, your mind is the result of decades of conditioning from
        parents, teachers, coaches, society, advertising: everyone telling you
        what <em>they think</em> you should do, when they don't even know you.
        And aren't you just sick of it?!?
      </Text>
      <Text className="mt-[8px] text-[16px] leading-[24px]">
        That's where Human Design fits in. This simple decision-making strategy,
        to {hd.decisionMakingStrategy()}, you will let go of the mental chatter
        and begin to hear your true nature. Because this is always a part of
        you, your genetic birthright, it is something you can always depend on
        begin to make <b>decisions you can trust</b>.
      </Text>
      <Text className="mt-[8px] text-[16px] leading-[24px]">
        Congratulations! We've covered a lot in a short amount of time. You now
        know how you can make decisions you can trust, and can begin to let go
        of depending on others for guidance. Tomorrow we'll give you some useful
        indicators that you can use to understand if you're on-track or
        off-track. See you then!
      </Text>
    </>
  )
}

export const WelcomeCampaignEmail4: React.FC<WelcomeCampaignEmailProps> = ({
  chart,
}) => {
  const hd = hdChart(chart)

  return (
    <>
      <Heading
        as="h2"
        className="mt-16 text-2xl font-bold tracking-tight text-gray-900"
      >
        Success Code 4: Your Key Indicators
      </Heading>
      <Text className="mt-[8px]">
        For many people, all this talk about decision making process can feel a
        bit ungrounded. How do you see progress? How do you know if these
        changes that you're making have an impact?
      </Text>
      <Text className="mt-[8px] text-[16px] leading-[24px]">
        Thankfully, there's a simple way of knowing whether you are on-track or
        off-track. Look back at your day and notice if you have more{' '}
        {hd.notSelfTheme()} than {hd.signatureTheme()}.
      </Text>

      <Section>
        <Row>
          <Column className="align-baseline">
            <table className="text-center">
              <td
                align="center"
                className="h-[40px] w-[40px] rounded-full bg-sky-200 p-0"
              >
                <Text className="m-0 font-semibold text-sky-600">4a</Text>
              </td>
            </table>
          </Column>
          <Column className="w-[85%]">
            <Text className="m-0 text-[20px] font-semibold leading-[28px] text-gray-900">
              Resistance indicator
            </Text>
            <Text className="m-0 mt-[8px] text-[16px] leading-[24px]">
              You're off-track when feeling{' '}
              <b>
                <em>{hd.notSelfTheme()}</em>
              </b>
              .
            </Text>
          </Column>
        </Row>
      </Section>

      <Text className="mt-[8px] text-[16px] leading-[24px]">
        You might have had a lot of {hd.notSelfTheme()} in your life. This is a
        sign that you are attempting to do something that{' '}
        <b>doesn't align with your core nature</b>. When you consistently do
        things that make you {hd.notSelfThemeAdjective()}, you will find
        yourself increasingly drained of energy.
      </Text>
      <Text className="mt-[8px] text-[16px] leading-[24px]">
        When you find yourself {hd.notSelfThemeAdjective()}, think about how you
        decided to do this activity: is it something that you thought you{' '}
        <i>should do</i>? Or is it something you actually wanted to do?
        Remember, making decisions from the head (typically "I should" language)
        is never the right way.
      </Text>
      <Text className="mt-[8px] text-[16px] leading-[24px]">
        Interestingly, actively attempting to avoid being{' '}
        {hd.notSelfThemeAdjective()} can itself cause it! When you think to
        yourself "oh, I don't want to feel {hd.notSelfThemeAdjective()}" and so
        let me just avoid it all together, how do you feel? Probably even more{' '}
        {hd.notSelfThemeAdjective()} than before! The only thing to do is to{' '}
        {hd.decisionMakingStrategy()}.
      </Text>

      <Section>
        <Row>
          <Column className="align-baseline">
            <table className="text-center">
              <td
                align="center"
                className="h-[40px] w-[40px] rounded-full bg-sky-200 p-0"
              >
                <Text className="m-0 font-semibold text-sky-600">4b</Text>
              </td>
            </table>
          </Column>
          <Column className="w-[85%]">
            <Text className="m-0 text-[20px] font-semibold leading-[28px] text-gray-900">
              Flow indicator
            </Text>
            <Text className="m-0 mt-[8px] text-[16px] leading-[24px]">
              You're on-track when feeling{' '}
              <b>
                <em>{hd.signatureTheme()}</em>
              </b>
              .
            </Text>
          </Column>
        </Row>
      </Section>

      <Text className="mt-[8px] text-[16px] leading-[24px]">
        On the other hand, when you feel {hd.signatureThemeAdjective()}, you are
        doing something right. You likely feel in the flow, like things are
        going your way. Rather than focusing on money, fame, or power, look for
        feelings of {hd.signatureTheme()} in your life. As you feel more{' '}
        {hd.signatureThemeAdjective()} and less {hd.notSelfThemeAdjective()},
        you'll find yourself moving more often with ease and joy.
      </Text>
      <Section>
        <Link href={signatureVideos[chart.type]}>
          <Img src={typeButtonGifs[chart.type]} height={180} width={320} />
          Watch how to move from {hd.notSelfThemeAdjective()} to{' '}
          {hd.signatureThemeAdjective()} in this video.
        </Link>
      </Section>
      <Text className="mt-[8px] text-[16px] leading-[24px]">
        If you can only remember one thing, this is it. By living life in this
        manner, you will{' '}
        <b>
          move from {hd.notSelfTheme()} to {hd.signatureTheme()}
        </b>
        . Look back at the things that cause you to get{' '}
        {hd.notSelfThemeAdjective()}: did you {hd.authorityDescription()} or did
        you make a decision based on what your mind thought you should do?
      </Text>

      <Text className="mt-[8px] text-[16px] leading-[24px]">
        And that wraps up the teaching content for this series. Tomorrow we'll
        wrap things up with some final words of wisdom, and what are the next
        steps if you'd like to consider the journey.
      </Text>
    </>
  )
}

export const WelcomeCampaignEmail5: React.FC<WelcomeCampaignEmailProps> = ({
  chart,
}) => {
  const hd = hdChart(chart)

  return (
    <>
      <Heading
        as="h2"
        className="mt-16 text-2xl font-bold tracking-tight text-gray-900"
      >
        In conclusion
      </Heading>

      <Text className="mt-[8px] text-[16px] leading-[24px]">
        We've gone through a bunch of stuff. Boiling it all down to a single
        statement gives us this:
      </Text>

      <Section>
        <Row>
          <Column className="align-baseline">
            <Img
              alt="rocket icon"
              height="48"
              src="https://react.email/static/rocket-icon.png"
              width="48"
            />
          </Column>
          <Column className="w-[85%]">
            <Text className="m-0 text-[20px] font-semibold leading-[28px] text-gray-900">
              On a bumper sticker
            </Text>
            <Text className="m-0 mt-[8px] text-[16px] leading-[24px] text-gray-500">
              Pause - observe - {hd.decisionMakingStrategy()}. This brings more{' '}
              {hd.signatureTheme()} and less {hd.notSelfTheme()}.
            </Text>
          </Column>
        </Row>
      </Section>

      <Text className="mt-[8px] text-[16px] leading-[24px]">
        Simple, but not always easy. It takes a lifetime to fully integrate this
        into your way of being. The effort is totally worth it! You'll find
        yourself moving through life with more ease and flow, and less
        resistance.
      </Text>

      <Section>
        <Img
          src="https://fractalhumandesign.s3.amazonaws.com/site/images/comic-fair-selection.png"
          alt="Fair selection test"
          className="aspect-auto rounded-xl bg-gray-50 object-cover"
        />
        <Text className="mt-4 flex gap-x-2 text-sm leading-6">
          What happens when we all try to play by the same rules.
        </Text>
      </Section>
      <Text className="mt-[8px] text-[16px] leading-[24px]">
        You have the strengths needed to be successful. Your strengths are
        different from other people's, and so it can be easy to compare with
        others and want what they have. But Human Design shows us how we are
        unique and that there's absolutely no point comparing yourself to anyone
        else. It's like comparing yourself to a cheetah: it's not your fault
        that you can't run as fast.
      </Text>

      <Text className="mt-[8px] text-[16px] leading-[24px]">
        Human Design teaches that in order to release accumulated energy, people
        should sleep alone. This is especially true for non-energy types, but
        applies to all types. Check out this video for more information.
      </Text>

      <Section>
        <Link href={sleepAloneProjectors}>
          <Img src={typeButtonGifs[chart.type]} height={180} width={320} />
          Click to view.
        </Link>
      </Section>

      <Heading
        as="h3"
        className="mt-4 text-2xl font-bold tracking-tight text-gray-900"
      >
        To learn more
      </Heading>

      <Text className="mt-[8px] text-[16px] leading-[24px]">
        You don't need anything else to get started. Simply by following your
        decision-making strategy, you will begin to have more flow in your life.
      </Text>
      <Text className="mt-[8px] text-[16px] leading-[24px]">
        However, some people get massive value by hearing it directly from
        someone who has been practicing it for years. I am available to answer
        any questions you might have, and to share more individual guidance
        based on your chart. As a Certified BG5 Career & Business Consultant, I
        have the training to guide you to understand your design in a practical
        manner.
      </Text>
      <Img
        src="https://fractalhumandesign.s3.us-east-1.amazonaws.com/site/images/Certified-Pro-Career-And-Business-Logo-2022-Medium.png"
        width={200}
        className="[margin:0_auto]"
      />

      <Text className="mt-[8px] text-[16px] leading-[24px]">
        You now have the information you need to go down the rabbit hole
        yourself. Or if you'd like to save some time, tap the button below and
        we can go through it together. Your next step is to schedule a session
        with me where you can answer any questions, as well as cover some things
        that this email series hasn't even touched on.
      </Text>
      <Button
        href="https://calendly.com/fractalhumandesign/bg5overview"
        className="box-border w-full rounded-[8px] bg-sky-600 px-[12px] py-[12px] text-center font-semibold text-white"
      >
        <span>Schedule your $97 BG5 Career Design Overview</span>
      </Button>
      <Text className="mt-[8px] text-[16px] leading-[24px]">
        Looking forward to guiding you in a life of more magic and flow.
      </Text>
    </>
  )
}

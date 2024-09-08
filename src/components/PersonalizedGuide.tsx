import thisIsTheWay from '@/images/this-is-the-way.jpg'
import { SimpleChart } from '@/types/SimpleChart'
import hdChart from '@/utils/hd-chart'
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'
import { CareerTypeTable } from './CareerTypeTable'
import { RaQuote } from './RaQuote'

interface ChartDetailProps {
  chart: SimpleChart
}

const ChartDetail: React.FC<ChartDetailProps> = ({ chart }) => {
  const hd = hdChart(chart)

  const careerWriteups: Map<string, string> = new Map([
    [
      'Generator',
      `You are designed to find your greatest pleasure in doing work that
      you love. You have a continually regenerated source of energy (this is
      why they are called Generators). A perfect day is to get up in the
      morning, spend the day creating what you love, and then come home and rest,
      feeling completely satisfied.`,
    ],
    [
      'Manifesting Generator',
      `You are designed to find your greatest pleasure in doing work that
      you love. You have a continually regenerated source of energy (this is
      why they are called Generators). A perfect day for them is to get up in the
      morning, spend the day creating what you love, and then come home and rest,
      feeling completely satisfied.`,
    ],
    [
      'Projector',
      `You are designed to help others to be successful. Your unique gift is to literally
      feel what the other person is feeling and then to advise them on the best ways to
      achieve their goals. Your design is made to do this on a one-on-one basis; if you
      find yourself attempting to advise groups, then the ideal interaction is still 
      on a one-on-one basis.`,
    ],
    [
      'Manifestor',
      `Because of your strong desire to have an impact, it can be tempting to
    simply DO without telling anyone. This can create disharmony between yourself and
    others who you interact with. Your strategy then is to INFORM people of what you are
    planning to do, before you do it. Informing others will create more harmony with
    so that they are not so challenged the change you want to make happen.`,
    ],
    [
      'Reflector',
      `First, realize how unique you are. Your gift is to reflect what is
    happening with others and then share it back with them. Patience and allowing are the
    key words to remember when deciding what to do. Then reflect and discuss what you
    perceive.`,
    ],
  ])

  const careerTips: Map<string, string> = new Map([
    [
      'Generator',
      `Doing what you love is super important. The world is full of burnt out Builders,
      slaving away doing what other people want them to do. Your energy is attractive
      to both people who want to utilize it for good or to take advantage of it for
      their own purposes. If you're doing what you love, amazing! If not, then start
      taking time to do what you love. Even if you're working a lot in a job you
      dislike, you might find that doing something as a side hustle can bring you
      even more energy rather than drain you even further!`,
    ],
    [
      'Manifesting Generator',
      `Doing what you love is super important. The world is full of burnt out Builders,
      slaving away doing what other people want them to do. Your energy is attractive
      to both people who want to utilize it for good or to take advantage of it for
      their own purposes. If you're doing what you love, amazing! If not, then start
      taking time to do what you love. Even if you're working a lot in a job you
      dislike, you might find that doing something as a side hustle can bring you
      even more energy rather than drain you even further!`,
    ],
    [
      'Projector',
      `Your path to success is to become an expert in a system. You might go to school 
      to learn something you're interested in, or just play around with it for awhile
      until you become that expert. Share all of that knowledge with anyone who might
      be interested; social media is great for this. Eventually, the right people will
      recognize you and invite you to guide them. But don't say yes right away! You
      still need to follow your decision-making strategy, which we talk about next.`,
    ],
    [
      'Manifestor',
      `Because of your strong desire to have an impact, it can be tempting to
    simply DO without telling anyone. This can create disharmony between yourself and
    others who you interact with. Your strategy then is to INFORM people of what you are
    planning to do, before you do it. Informing others will create more harmony with
    so that they are not so challenged the change you want to make happen.`,
    ],
    [
      'Reflector',
      `First, realize how unique you are. Your gift is to reflect what is
    happening with others and then share it back with them. Patience and allowing are the
    key words to remember when deciding what to do. Then reflect and discuss what you
    perceive.`,
    ],
  ])

  const raQuotes: Map<string, string> = new Map([
    [
      'Generator',
      `There's nothing more special on this planet than Generators ... there is 
      no difference between finding a life and getting a job; you come into the
      world to find the right work. It is only once you've found the right work
      that you get a life.`,
    ],
    [
      'Manifesting Generator',
      `There's nothing more special on this planet than Generators ... there is 
      no difference between finding a life and getting a job; you come into the
      world to find the right work. It is only once you've found the right work
      that you get a life.`,
    ],
    [
      'Manifestor',
      `You know, we're not warm, fuzzy people, Manifestors. It's not the way we work. 
      Manifestors are designed simply to go out there and do their thing, period. And 
      hopefully there are others that they drag along with them.`,
    ],
    [
      'Projector',
      `Everything about a Projector is that a Projector is here to guide, to guide.
       There's something very important to understand if you're a Projector. 
       Probably the most important thing I can tell you only deal with one person at 
       a time, one person at a time. ... You know, if you're a Projector and you got 
       a family and you got a problem, don't do group therapy. Oh, let's all talk 
       about it together, right? Oh, is that awful for you? You always end up the 
       loser in that because you can only deal one being at a time.`,
    ],
    [
      'Reflector',
      `I'm always glad when Reflectors come into human design, because it's sort of 
      like Neo and matrix. You know, the Reflector says, Oh, we can pull this one 
      out, because this one's really weird and different. It doesn't follow the 
      rules. Maybe they'll be okay here.`,
    ],
  ])
  const careerNotSelfWriteups: Map<string, string> = new Map([
    [
      'Generator',
      `Unfortunately, most Builders in the world have not found the work that
      they love to do. These people get up in the morning already exhausted, and
      do their best to avoid doing work. Most quiet quitters are frustrated Builders,
      because they don't see a way to get out of the system. If this is you, then 
      Human Design will give you the tools to begin to break out of your rut and
      find a career which is satisfying.`,
    ],
    [
      'Manifesting Generator',
      `Unfortunately, most Builders in the world have not found the work that
      they love to do. These people get up in the morning already exhausted, and
      do their best to avoid doing work. Most quiet quitters are frustrated Builders,
      because they don't see a way to get out of the system. If this is you, then 
      Human Design will give you the tools to begin to break out of your rut and
      find a career which is satisfying.`,
    ],
    [
      'Projector',
      `You are designed to guide specific people. To do this, it is not for you
    to try to make things happen. Your path to success is to become the expert in a
    system, perhaps by experimentation, study, or some other way. The right people will
    then recognize you and invite you to help them. Your mission is to wait for people
    who you also recognize, wait for them to invite you, and then follow your authority
    (described next) to decide if this invitation is right for you.`,
    ],
    [
      'Manifestor',
      `Because of your strong desire to have an impact, it can be tempting to
    simply DO without telling anyone. This can create disharmony between yourself and
    others who you interact with. Your strategy then is to INFORM people of what you are
    planning to do, before you do it. Informing others will create more harmony with
    so that they are not so challenged the change you want to make happen.`,
    ],
    [
      'Reflector',
      `First, realize how unique you are. Your gift is to reflect what is
    happening with others and then share it back with them. Patience and allowing are the
    key words to remember when deciding what to do. Then reflect and discuss what you
    perceive.`,
    ],
  ])

  const strategyWriteups: Map<string, string> = new Map([
    [
      'wait to respond before engaging',
      `In other words, allowing life to move us, rather than choosing what we
      think we should do next. People, experiences, things we hear, see, or touch:
      all of these are things to respond to. To "live in response" means ensuring you have
      plenty of opportunities to respond to things. So if you work from home, it might
      be a good idea to at least work at a coffee shop sometimes.`,
    ],
    [
      'inform before taking action',
      `You are designed to guide specific people. To do this, it is not for you
    to try to make things happen. Your path to success is to become the expert in a
    system, perhaps by experimentation, study, or some other way. The right people will
    then recognize you and invite you to help them. Your mission is to wait for people
    who you also recognize, wait for them to invite you, and then follow your authority
    (described next) to decide if this invitation is right for you.`,
    ],
    [
      'wait for recognition and invitation',
      `Because of your strong desire to have an impact, it can be tempting to
    simply DO without telling anyone. This can create disharmony between yourself and
    others who you interact with. Your strategy then is to INFORM people of what you are
    planning to do, before you do it. Informing others will create more harmony with
    so that they are not so challenged the change you want to make happen.`,
    ],
    [
      'wait a 28 day cycle to reflect and assess',
      `First, realize how unique you are. Your gift is to reflect what is
    happening with others and then share it back with them. Patience and allowing are the
    key words to remember when deciding what to do. Then reflect and discuss what you
    perceive.`,
    ],
  ])

  const authorityWriteups: Map<string, string> = new Map([
    [
      'sacral',
      `Many suggest to follow your gut, and for you this is great advice.
    How this works for you is only something you can know by experimenting. In my
    Living Your Design workshop, we practice this by asking Yes-No questions and feeling
    how the body responds. There is often a gutteral "uh-huh" for yes or "uh-uh" for no,
    but for many people this sound has been suppressed. For others there can be an energy
    which is rising or falling. Finding someone you trust and with whom you can be 100%
    truthful can help you understand your personal response mechanism. Regardless of how
    your gut responds, you can take action immediately if you get a positive response.
    This means that you have the energy to take action.`,
    ],
    [
      'emotional',
      `For you, there is no truth in the present moment. That means that even though
    you might be excited or resistent about something, you can't trust
    it. This is because you have an emotional wave: some days you're up and some days you're
    down. On up days everything is a "yes", and on down days everything's a "no". 
    You've probably already noticed this in you. What you might not
    have done is to wait for the emotions to settle down before making a decision.`,
    ],
    [
      'splenic',
      `Your way of making decisions is almost magical: an instinctive or
    intuitive knowing of what is the most healthy for you. This knowing can be quite
    subtle, and because of this it can be easy for your mind to overrule it and make
    a "rational" decision. Beware of this! The ER is full of people like you who ignored
    this intuitive sense. How it works is quite unique for you, and so you'll
    need to cultivate and learn about this sense.`,
    ],
    [
      'ego',
      `This may sound completely heretical, but your way of making decisions is to BE
    SELFISH! What do YOU specifically want, what is in it for you? Ask yourself if your
    heart is in it: if yes, then it's likely something good for you to do. If not,
    then it can be quite unhealthy for you to say yes. Unlike Generators, you have a
    limited supply of energy, so to use this resource wisely you need to follow your will.`,
    ],
    [
      'self projected',
      `Do you remember the show House, M.D.? In order to decide on the best
    course of action, he would need to talk to someone else in order to make a decision.
    And he wasn't asking for advice; he simply needed someone to act as a sounding board.
    This is you. In order to make decisions, you should talk to someone who you can trust
    in order to listen to what YOU say. When you are speaking in a way that feels
    authentic to you and makes you happy, this is a sign that you're on the right path.`,
    ],
    [
      'outer',
      `Do you remember the show House, M.D.? In order to decide the best
    course of action, he would need to talk to someone else in order to make a decision.
    And he wasn't asking for advice; he simply needed someone to act as a sounding board.
    This is you. In order to make decisions, you should talk to multiple people who you
    can trust, and then listen to what they say. Also pay attention to how you feel in that
    environment while you are speaking. Notice if there are some consistencies in how you
    feel when talking to different people, and find what makes you happy.`,
    ],
    [
      'lunar',
      `Yours is the slowest process to make decisions. For major decisions, it is best
    for you to wait for an entire lunar cycle: 28 days. After taking this time, you
    should have much more clarity on what is right for you and what is not. During this
    time, discuss with other people, not for their advice, but to get a sense of how you
    personally feel throughout this time. Eventually you should suddenly have clarity on
    what is the correct decision for you.`,
    ],
  ])

  const authorityTips: Map<string, string> = new Map([
    [
      'sacral',
      `How following your gut works for you is only something to know by experimenting. In my
    Living Your Design workshop, we practice this by asking Yes-No questions and feeling
    how the body responds. There is often a gutteral "uh-huh" for yes or "uh-uh" for no,
    but for many people this sound has been suppressed. For others there can be an energy
    which is rising or falling. Finding someone you trust and with whom you can be 100%
    truthful can help you understand your personal response mechanism. Regardless of how
    your gut responds, you can take action immediately if you get a positive response.
    This means that you have the energy to take action.`,
    ],
    [
      'emotional',
      `How long will this take? At least overnight, but depending on how big
    of a decision, it might be days, weeks, months, or even years! When you don't have a
    big charge about the decision, when you have reached a level of equanimity, 
    this will be a sign that you've reached clarity. But
    you will never be absolutely certain: 60% might be the best you ever get.
    The good news is that by waiting through your emotional wave, you will be able to
    understand the decision far better than non-emotional people will ever do.`,
    ],
    [
      'splenic',
      `Your way of making decisions is almost magical: an instinctive or
    intuitive knowing of what is the most healthy for you. This knowing can be quite
    subtle, and because of this it can be easy for your mind to overrule it and make
    a "rational" decision. Beware of this! The ER is full of people like you who ignored
    this intuitive sense. How it works is quite unique for you, and so you'll
    need to cultivate and learn about this sense.`,
    ],
    [
      'ego',
      `This may sound completely heretical, but your way of making decisions is to BE
    SELFISH! What do YOU specifically want, what is in it for you? Ask yourself if your
    heart is in it: if yes, then it's likely something good for you to do. If not,
    then it can be quite unhealthy for you to say yes. Unlike Generators, you have a
    limited supply of energy, so to use this resource wisely you need to follow your will.`,
    ],
    [
      'self projected',
      `Do you remember the show House, M.D.? In order to decide on the best
    course of action, he would need to talk to someone else in order to make a decision.
    And he wasn't asking for advice; he simply needed someone to act as a sounding board.
    This is you. In order to make decisions, you should talk to someone who you can trust
    in order to listen to what YOU say. When you are speaking in a way that feels
    authentic to you and makes you happy, this is a sign that you're on the right path.`,
    ],
    [
      'outer',
      `Do you remember the show House, M.D.? In order to decide the best
    course of action, he would need to talk to someone else in order to make a decision.
    And he wasn't asking for advice; he simply needed someone to act as a sounding board.
    This is you. In order to make decisions, you should talk to multiple people who you
    can trust, and then listen to what they say. Also pay attention to how you feel in that
    environment while you are speaking. Notice if there are some consistencies in how you
    feel when talking to different people, and find what makes you happy.`,
    ],
    [
      'lunar',
      `Yours is the slowest process to make decisions. For major decisions, it is best
    for you to wait for an entire lunar cycle: 28 days. After taking this time, you
    should have much more clarity on what is right for you and what is not. During this
    time, discuss with other people, not for their advice, but to get a sense of how you
    personally feel throughout this time. Eventually you should suddenly have clarity on
    what is the correct decision for you.`,
    ],
  ])

  const shadows: Map<string, string> = new Map([
    ['root', 'Rushing to get things done to relieve stress'],
    ['sacral', 'Not knowing when enough is enough'],
    ['splenic', 'Holding onto things which no longer serve'],
    ['solarplexus', 'Avoiding truth and consequences'],
    ['ego', 'Trying to prove yourself'],
    ['gcenter', 'Searching for love and direction'],
    ['throat', 'Trying to be seen'],
    ['ajna', 'Distracted and losing focus'],
    ['head', "Trying to answer other people's questions"],
  ])

  const shadowWriteups: Map<string, string> = new Map([
    [
      'root',
      `You may find that you feel pressured to get things done, which would cause you
    to rush to complete them. Unfortunately once one thing gets done, there's always
    something else to rush to complete. Being a hamster on a hamster wheel can be an
    accurate metaphor. This can get especially bad when certain other people come into
    your space, and even if they don't verbally pressure you to do something, you can
    still feel pressured.`,
    ],
    [
      'sacral',
      `We live in a Generator world: around 70% of the world have this consistent
    source of energy. You without this source of energy can feel like something is
    lacking, working harder and harder in order to keep up. And because you may not know
    when it's time to stop, you might have a tendency to work to exhaustion. Make sure
    to get plenty of rest: you need more than most people!`,
    ],
  ])

  return (
    <>
      <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
        Success Code 1: Career Type
      </h2>
      <p className="mt-8">
        We start with a look at the type of career which most aligns with your
        unique nature. Broadly speaking there are four different types of
        careers. None of them are more important than others, and each is
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
        Each career type has positive and negative aspects, based on their
        individual nonverbal energy. Since it is based on what is intrinsicly
        you, rather than personal skills or preferences, it's more integral than
        the "career guidance" you might have received in high school. When
        working in alignment with your broad career type, you're more likely to
        feel in flow.
      </p>
      <p className="mt-6">
        Unfortunately people try to be a type they are not. For example, the
        coaching industry (an Advisor-style career) has seen massive growth,
        leading some Builders (myself included) to try to teach others rather
        than looking to do what they love. Builders who do this are frequently
        frustrated. Meanwhile when Advisors, who don't have the same consistent
        level of energy as Builders do, try to keep up with Builders, they will
        tend to feel exhausted.
      </p>
      <p className="mt-6">
        Now that you have a general sense of the types, we can talk about you
        specifically:
      </p>
      <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
        <li className="flex gap-x-3">
          <CheckCircleIcon
            aria-hidden="true"
            className="mt-1 h-5 w-5 flex-none text-sky-600"
          />
          <span>
            <strong className="font-semibold text-gray-900">
              Career Type.{' '}
            </strong>
            You are a{' '}
            <b>
              <em>{hd.careerDesign()}</em>
            </b>
            , also known as a {hd.type()}.
          </span>
        </li>
      </ul>
      <p className="mt-6">{careerWriteups.get(hd.type())}</p>
      <RaQuote>{raQuotes.get(hd.type())}</RaQuote>
      <p className="mt-6">{careerNotSelfWriteups.get(hd.type())}</p>
      <p className="mt-6">{careerTips.get(hd.type())}</p>

      {hd.type() === 'Manifesting Generator' && (
        <>
          <p className="mt-6">
            BTW, many people are confused by what exactly is a "Manifesting
            Generator", which is why we use the them "Expres Builder" instead.
            Just to be clear:
          </p>
          <RaQuote>
            [A] Manifesting Generator is a Generator with manifesting potential
            ... A Generator is a Generator is a Generator. It is about response.
            The power of the Manifesting Generator is the quality of energy that
            they can put to any task.
          </RaQuote>
          <p className="mt-6">
            The biggest difference in practice is that when building, Express
            Builders tend to skip steps while Classic Builders are more
            methodical.
          </p>
        </>
      )}

      <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
        Success Code 2: Personal Interaction Style
      </h2>
      <p className="mt-8">
        Each of the types has a different way of moving though life. Living
        according to your design means to stop trying to make things happen from
        the <em>mind</em> ("I should ..."), and instead allow the unique wisdom
        of the <em>body</em> to guide you in daily activities.
      </p>
      <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
        <li className="flex gap-x-3">
          <CheckCircleIcon
            aria-hidden="true"
            className="mt-1 h-5 w-5 flex-none text-sky-600"
          />
          <span>
            <strong className="font-semibold text-gray-900">
              Personal Interaction Style.{' '}
            </strong>
            Your personal style is to{' '}
            <b>
              <em>{hd.strategy()}</em>
            </b>
            .
          </span>
        </li>
      </ul>
      <p className="mt-6">{strategyWriteups.get(hd.strategy())}</p>

      {hd.type() !== 'Manifestor' && (
        <>
          <p className="mt-6">
            You're probably not used to so much waiting. You might even feel
            that if you're not actively doing something, you're falling behind.
            Or maybe even feel like you're being lazy! But waiting is not just
            sitting around, waiting for something to happen. It's an active
            state of awareness. Rather than running around and DOING, it's more
            of a state of BEING. And then doing what you want, what makes you
            happy, or even something which brings you {hd.signatureTheme()}.
          </p>

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
      <p className="mt-6">{strategyWriteups.get(hd.strategy())}.</p>

      <p className="mt-6">
        After you {hd.strategy()}, you need to determine if this is something to
        take action on. That's next.
      </p>
      <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
        Success Code 3: Your Decision-Making Strategy
      </h2>
      <p className="mt-8">
        We all have decisions to make: should I work with this person or not,
        should I date or marry this person. By following the{' '}
        <em>decision-making strategy</em> which is described below, we let go of
        the old patterns which have controlled us in the past, and move towards
        a new way of being which is authentically ourselves. This is not an
        instant fix; it can take years to completely let go of these destructive
        patterns. But the payoff is worth it: a life without {hd.notSelfTheme()}{' '}
        and a nearly effortless way of being.
      </p>

      <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
        <li className="flex gap-x-3">
          <CheckCircleIcon
            aria-hidden="true"
            className="mt-1 h-5 w-5 flex-none text-sky-600"
          />
          <span>
            <strong className="font-semibold text-gray-900">
              Decision-Making Strategy.{' '}
            </strong>
            Your way to make decisions is to{' '}
            <b>
              <em>{hd.decisionMakingStrategy()}</em>
            </b>
            .
          </span>
        </li>
      </ul>
      <p className="mt-6">{authorityWriteups.get(hd.authority())}</p>
      <p className="mt-6">{authorityTips.get(hd.authority())}</p>

      <figure className="mt-16">
        <Image
          alt="Star Wars Mandalorian - This is the way"
          src={thisIsTheWay}
          className="aspect-video rounded-xl bg-gray-50 object-cover"
        />
        <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
          <InformationCircleIcon
            aria-hidden="true"
            className="mt-0.5 h-5 w-5 flex-none text-gray-300"
          />
          Your decision-making strategy, to {hd.decisionMakingStrategy()}, is
          your way.
        </figcaption>
      </figure>

      <p className="mt-8">
        This brings us to a basic Human Design teaching: the mind is never the
        best way to make decisions. It is great for taking in information and
        considering different options. In fact, studies have shown that this is
        the case: we all make emotional decisions and then attempt to justify it
        rationally. So when it is time to make a decision, always first{' '}
        {hd.authorityDescription()}.
      </p>

      <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
        Success Code 4: Your Key Indicators
      </h2>
      <p className="mt-6">
        For many people, all this talk about decision making process can feel a
        bit ungrounded. How do you see progress? How do you know if these
        changes that you're making have an impact?
      </p>
      <p className="mt-8">
        Thankfully, there's a simple way of knowing whether you are on-track or
        off-track. Look back at your day and notice if you have more{' '}
        {hd.notSelfTheme()} than {hd.signatureTheme()}.
      </p>
      <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
        <li className="mt-6 flex gap-x-3">
          <CheckCircleIcon
            aria-hidden="true"
            className="mt-1 h-5 w-5 flex-none text-sky-600"
          />
          <span>
            <strong className="font-semibold text-gray-900">
              Negative key indicator.{' '}
            </strong>
            Your sign of resistance is{' '}
            <b>
              <em>{hd.notSelfTheme()}</em>
            </b>
            .
          </span>
        </li>
      </ul>
      <p className="mt-6">
        You might have had a lot of {hd.notSelfTheme()} in your life. This is a
        sign that you are attempting to do something that{' '}
        <b>doesn't align with your core nature</b>. When you consistently do
        things that make you {hd.notSelfThemeAdjective()}, you will find
        yourself increasingly drained of energy.
      </p>
      <p className="mt-8">
        When you find yourself {hd.notSelfThemeAdjective()}, think about how you
        decided to do this activity: is it something that you thought you{' '}
        <i>should do</i>? Or is it something you actually wanted to do?
        Remember, making decisions from the head (typically "I should" language)
        is never the right way.
      </p>
      <p className="mt-8">
        Interestingly, actively attempting to avoid being{' '}
        {hd.notSelfThemeAdjective()} can itself cause it! When you think to
        yourself "oh, I don't want to feel {hd.notSelfThemeAdjective()}" and so
        let me just avoid it all together, how do you feel? Probably even more{' '}
        {hd.notSelfThemeAdjective()} than before! The only thing to do is to{' '}
        {hd.decisionMakingStrategy()}.
      </p>
      <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
        <li className="mt-6 flex gap-x-3">
          <CheckCircleIcon
            aria-hidden="true"
            className="mt-1 h-5 w-5 flex-none text-sky-600"
          />
          <span>
            <strong className="font-semibold text-gray-900">
              Positive Key indicator.{' '}
            </strong>
            You are on-track if you have a feeling of{' '}
            <b>
              <em>{hd.signatureTheme()}</em>
            </b>
            .
          </span>
        </li>
      </ul>
      <p className="mt-8">
        On the other hand, when you feel {hd.signatureThemeAdjective()}, you are
        doing something right. You likely feel in the flow, like things are
        going your way. Rather than focusing on money, fame, or power, look for
        feelings of {hd.signatureTheme()} in your life. As you feel more{' '}
        {hd.signatureThemeAdjective()} and less {hd.notSelfThemeAdjective()},
        you'll find yourself moving more often with ease and joy.
      </p>
      <p className="mt-6">
        If you can only remember one thing, this is it. By living life in this
        manner, you will{' '}
        <b>
          move from {hd.notSelfTheme()} to {hd.signatureTheme()}
        </b>
        . Look back at the things that cause you to get{' '}
        {hd.notSelfThemeAdjective()}: did you {hd.authorityDescription()} or did
        you make a decision based on what your mind thought you should do?
      </p>

      <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
        <li className="mt-6 flex gap-x-3">
          <CheckCircleIcon
            aria-hidden="true"
            className="mt-1 h-5 w-5 flex-none text-sky-600"
          />
          <span>
            <strong className="font-semibold text-gray-900">
              In one line.{' '}
            </strong>
            Pause - observe - {hd.decisionMakingStrategy()}. This brings more{' '}
            {hd.signatureTheme()} and less {hd.notSelfTheme()}.
          </span>
        </li>
      </ul>
    </>
  )
}

export default ChartDetail

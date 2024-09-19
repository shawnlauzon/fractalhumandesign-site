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
      feel what the other person is feeling and then from that recognition, to advise
      them on the best ways to
      achieve their goals. Your design is made to do this on a one-on-one basis; if you
      find yourself attempting to advise groups, then the ideal interaction is still 
      on a one-on-one basis.`,
    ],
    [
      'Manifestor',
      `You are designed to be the launch pad for anything that you desire. Most 
      entrepreneur books have you in mind for their ideal client: someone who can 
      start with only an idea, find the people you need to make it happen, and
      then to go out and just get it started. Without you, we'd all be sitting
      around, waiting for someone to show up and tell us what to do.`,
    ],
    [
      'Reflector',
      `You have a very special purpose in the world: to take the pulse of everything
      going on and understand the health of the system. You might think of
      your talent as being like a canary in a coal mine: you can literally feel it
      in your body when things are harmonious and when they are discordant. Although
      you can feel everything that's going on, it tends not to affect you as much
      as it does other people; you have what is called "a teflon aura".`,
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
      like Neo and the Matrix. You know, the Reflector says, "Oh, we can pull this one 
      out, because this one's really weird and different. It doesn't follow the 
      rules. Maybe they'll be okay here."`,
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
      `Advisors who are not living according to their design are like exhausted
      Builders, trying to keep up with people who have more energy than they do.
      These people are especially at risk of working themselves to exhaustion,
      until the point that their body just gives up on them. 
      The phrase "not made to work" is meant for you, where "work" is the
      typical 9-5 job. If instead you focus on guiding the people who are right
      for you, you will be energized by each of them.`,
    ],
    [
      'Manifestor',
      `You would think that with slogans like "Just Do It", the world would be
      perfect for someone like you. Well, not always. Because even though you
      are here to get things started, you're not here to do all the work; the
      Builders are here to do the work. Many Initiators get trapped in so much
      of the DOING that they burn out and aren't able to do the initiation
      that they're meant to do.`,
    ],
    [
      'Reflector',
      `Evaluators can feel like they are somehow different from everyone else.
      And at only 1% of the population, this is accurate! When not understanding
      their unique nature, you might continually try to fit in, or judge yourself
      because of a feeling of being invisible, but no matter
      what, always feel a bit separate. You might also sometimes feel like a victim,
      with so many different things happening to you. The trick is acceptance of 
      your unique nature.`,
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
      be interested; social media is great for this. Take feedback and use it to get
      even better. The trick at the beginning stage is to worry less about making
      a profit and more about becoming an expert.`,
    ],
    [
      'Manifestor',
      `The beauty of being an Initiator is that you get to go first. While all of
      the other types are waiting: waiting for the moon, the others, the invitation;
      you wait for nothing and just do it. The downside is that you have to deal 
      with all the rejection. Don't take it personally. Just because you initiate, it 
      doesn't mean it will be right for them. So don't wait for others to come to you;
      be the one to invite others to things, and see how willing people are to be
      initiated.`,
    ],
    [
      'Reflector',
      `Your ideal career situation is to work in medium to large companies where 
      you can get the vibe of the whole place. The phrase "variety is the spice 
      of life" applies to you more than anyone else. Your accepting nature is a
      joy for others to be around, and so it's important to stay neutral and
      remain unattached when evaluating the group.`,
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
      'wait for recognition and invitation',
      `You are designed to guide specific people. The great thing is that you
      don't have to go out and look for them: you are designed to be found, when
      you have mastered your craft! Eventually, the right people will
      recognize you and invite you to guide them. Only when you truly feel seen
      and recognized will you have the possibility of this being a good connection.
      Waiting for a formal invitation is necessary in four areas of life: 
      love, career, bonding with others, and finding a place to live.`,
    ],
    [
      'inform before taking action',
      `Because of your strong desire to get things started and to have an impact, 
      it can be tempting to simply DO without telling anyone.
    This can create disharmony between yourself and
    others who you interact with. Your strategy then is to INFORM people of what you are
    planning to do, before you do it. Informing others will create more harmony with
    so that they are not so challenged the change you want to make happen. At worst, 
    not informing can show up as manipulating people to get them to do what you want, 
    and this is why informing is so important.`,
    ],
    [
      'wait a 28 day cycle to reflect and assess',
      `Yes you read that right, 28 days! During this waiting period, every day you
      will perceive possibilities from different angles, and so it's important to
      really slow down and recognize how your perspective is continually shifting.
      `,
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
    need to cultivate and learn about this sense by being very calm and paying attention.`,
    ],
    [
      'ego',
      `This may sound completely heretical, but your way of making decisions is to BE
    SELFISH! What do YOU specifically want, what is in it for you? Ask yourself if your
    heart is in it: if yes, then it's likely something good for you to do. And make
    sure you have a balance between your drive and getting plenty of rest; like all
    Advisors, it can be difficult to know when enough is enough.`,
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
      `During this extended waiting period, discuss it with other people who you
      can trust: not for their advice, but to get a sense of how you
    personally feel throughout this time. They act as sounding boards for you to
    feel into what is correct for you. Eventually you will have a sudden clarity on
    and deeping knowing of the big picture and what is the correct decision.`,
    ],
  ])

  const authorityTips: Map<string, string> = new Map([
    [
      'sacral',
      `How this works for you is only something to know by experimenting. In my
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
      `Your instinct / intuition is attunded for keeping you out of danger, and so you
      might not even notice it unless there is something that you should avoid. And
      in those cases, it's EXTREMELY important to trust it. In general, it
      speaks only once and then be quiet. Subtle.
      Following through on your intuition can be especially challenging for Advisors who have been waiting
      for something to happen, and when it finally does, you get a NO. This
      is sometimes a test: the opportunity which is right for you appears
      only after saying no to one that isn't.`,
    ],
    [
      'ego',
      `You stay healthy by making and keeping promises, which is pretty rare.
      So have compassion for the majority of people who lack your willpower
      and should never make promises. `,
    ],
    [
      'self projected',
      `Make sure to talk with many different people to get a full sense of your
      own direction. In addition to talking it out with others, ask yourself 1) does this feel
      like me? 2) will it make me happy? 3) Will it help me express myself?
      4) Will it bring me in the right direction?`,
    ],
    [
      'outer',
      `In addition to talking it out with others, ask yourself 1) does this feel
      like me? 2) will it make me happy? 3) Will it help me express myself?
      4) Will it bring me in the right direction?`,
    ],
    [
      'lunar',
      `Because of how different your design is from others, we strongly 
      recommended that you have a reading with a qualified professional to begin
      to understand what makes you so unique. I offer half off for all
      Evaluators, please reach out for details.`,
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
        individual nonverbal energy. Since it is based on what is intrinsically
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
      <p className="mt-8">{careerWriteups.get(hd.type())}</p>
      <RaQuote>{raQuotes.get(hd.type())}</RaQuote>
      <p className="mt-8">{careerNotSelfWriteups.get(hd.type())}</p>
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
          <p className="mt-8">
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
      <p className="mt-8">{strategyWriteups.get(hd.strategy())}</p>

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
      <p className="mt-8">{strategyWriteups.get(hd.strategy())}</p>

      <p className="mt-6">
        After you {hd.strategy()}, you still need to determine if this is
        something to take action on. That's next.
      </p>
      <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
        Success Code 3: Your Decision-Making Strategy
      </h2>
      <p className="mt-8">
        We all have decisions to make: should I work with this person or not,
        should I date or marry this person. By following the{' '}
        <em>decision-making strategy</em>, we let go of the old patterns which
        have controlled us in the past, and move towards a new way of being
        which is authentically ourself. This is not an instant fix; it can take
        years to completely let go of these destructive patterns. But the payoff
        is worth it: a life without {hd.notSelfTheme()} and a nearly effortless
        way of being.
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
              <em>{hd.authorityDescription()}</em>
            </b>
            .
          </span>
        </li>
      </ul>
      <p className="mt-8">{authorityWriteups.get(hd.authority())}</p>
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
        This brings us to a core teaching of Human Design: the mind is never the
        way to make decisions. It is a tool, and this tool is ideal for
        processing information and considering different options. But not for
        making decision. However, it will continually try to persuade you into
        ignoring your body, complaining "you're not being logical". Just let it
        go.{' '}
      </p>
      <p className="mt-6">
        Remember, your mind is the result of decades of conditioning from
        parents, teachers, coaches, society, advertising: everyone telling you
        what <em>they think</em> you should do, when they don't even know you.
        And aren't you just sick of it?!?
      </p>
      <p className="mt-6">
        That's where Human Design fits in. This simple decision-making strategy,
        to {hd.decisionMakingStrategy()}, you will let go of the mental chatter
        and begin to hear your true nature. Because this is always a part of
        you, your genetic birthright, it is something you can always depend on
        begin to make <b>decisions you can trust</b>.
      </p>

      <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
        Success Code 4: Your Key Indicators
      </h2>
      <p className="mt-8">
        For many people, all this talk about decision making process can feel a
        bit ungrounded. How do you see progress? How do you know if these
        changes that you're making have an impact?
      </p>
      <p className="mt-6">
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
              Resistance indicator.{' '}
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
        You might have had a lot of {hd.notSelfTheme()} in your life. This is a
        sign that you are attempting to do something that{' '}
        <b>doesn't align with your core nature</b>. When you consistently do
        things that make you {hd.notSelfThemeAdjective()}, you will find
        yourself increasingly drained of energy.
      </p>
      <p className="mt-6">
        When you find yourself {hd.notSelfThemeAdjective()}, think about how you
        decided to do this activity: is it something that you thought you{' '}
        <i>should do</i>? Or is it something you actually wanted to do?
        Remember, making decisions from the head (typically "I should" language)
        is never the right way.
      </p>
      <p className="mt-6">
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
              Flow indicator.{' '}
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

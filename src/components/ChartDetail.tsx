import raUruHu from '@/images/avatars/ra-uru-hu.jpg'
import fairSelection from '@/images/fair-selection.webp'
import thisIsTheWay from '@/images/this-is-the-way.jpg'
import { SimpleChart } from '@/types/SimpleChart'
import hdChart from '@/utils/hd-chart'
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'

interface ChartDetailProps {
  chart: SimpleChart
}

const ChartDetail: React.FC<ChartDetailProps> = ({ chart }) => {
  const hd = hdChart(chart)

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
      `So a manifesting generator is a generator with manifesting potential, with
      manifesting potential ... A generator is a generator is a generator. It is
      about response. The power of the manifesting generator is the quality of energy
      that they can put to any task.`,
    ],
    [
      'Manifestor',
      `You know, we're not warm, fuzzy people, Manifestors. It's not the way we work. Manifestors are designed simply to go out there and do their thing, period. And hopefully there are others that they drag along with them.`,
    ],
    [
      'Projector',
      `Everything about a projector is that a projector is here to guide, to guide. There's something very important to understand if you're a projector. Probably the most important thing I can tell you only deal with one person at a time, one person at a time. ... You know, if you're a projector and you got a family and you got a problem, don't do group therapy. Oh, let's all talk about it together, right? Oh, is that awful for you? You always end up the loser in that because you can only deal one being at a time.`,
    ],
    [
      'Reflector',
      `I'm always glad when Reflectors come into human design, because it's sort of like Neo and matrix. You know, the Reflector says, Oh, we can pull this one out, because this one's really weird and different. It doesn't follow the rules. Maybe they'll be okay here.`,
    ],
  ])

  const strategyWriteups: Map<string, string> = new Map([
    [
      'Generator',
      `As a Generator, your life is all about this type
    of waiting. Which really means doing whatever you want to do, while at the same time
    being aware of how your body responds. When you are in flow, your life consists of
    effortlessly responding to everything that life presents to you.`,
    ],
    [
      'Manifesting Generator',
      `As a Generator, your life is all about this type
    of waiting. Which really means doing whatever you want to do, while at the same time
    being aware of how your body responds. When you are in flow, your life consists of
    effortlessly responding to everything that life presents to you.`,
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

  const authorityWriteups: Map<string, string> = new Map([
    [
      'sacral',
      `And what does it mean to respond? Well for you, it means to follow your gut.
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
    you might believe that you either want or don't want to do something, you can't trust
    it. This is because you have an emotional wave: some days you're up and some days you're
    down. You probably have already noticed that this is true for you. What you might not
    have done is wait for clarity. So this will likely be the most challenging part; even
    after you've waited for something to happen, now you need to wait some more until you
    have clarity. How long will this take? At least overnight, but depending on how big
    of a decision, it might be days, weeks, months, or even years! When you don't have a
    big charge about the decision, this will be a sign that you've reached clarity. But
    you will probably never be certain. being 60% certain might be the best you ever get.
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
      <p>
        Some of what is shared here you might resonate with, and others not so
        much. This is normal: most of us have been conditioned for years to be
        someone that we aren't, and so it can be hard to recognize our true
        nature.
      </p>
      <p className="mt-8">
        Keep in mind that this is an experiment. You can't do anything wrong!
        Simply follow the practices, notice how you feel, and then make any
        adjustments you think will help.
      </p>
      <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
        Success Code 1: Career Type
      </h2>
      <p className="mt-6">
        At the core of the practice is to move from mindlessly reacting to
        things that happen, to following a way of being that is specific to you.
        By following this <i>decision-making strategy</i> which is described
        below, we let go of the old patterns which have controlled us in the
        past, and move towards a new way of being which is authentically
        ourselves. This is not an instant fix; it can take years to completely
        let go of these destructive patterns. But the payoff is worth it: a life
        without {hd.notSelfTheme()} and a nearly effortless way of being.
      </p>
      <p className="py-2 text-center text-xl font-black">Welcome home.</p>
      <li className="flex gap-x-3">
        <CheckCircleIcon
          aria-hidden="true"
          className="mt-1 h-5 w-5 flex-none text-indigo-600"
        />
        <span>
          <strong className="font-semibold text-gray-900">Career Type.</strong>
          You are a {hd.careerDesign()}, also known as {hd.type()}.
        </span>
      </li>
      <p className="mt-6">{strategyWriteups.get(hd.type())}</p>
      <figure className="mt-10 border-l border-indigo-600 pl-9">
        <blockquote className="font-semibold text-gray-900">
          <p>"{raQuotes.get(hd.type())}"</p>
        </blockquote>
        <figcaption className="mt-6 flex gap-x-4">
          <Image
            alt="Ra Uru Hu headshot"
            src={raUruHu}
            className="h-6 w-6 flex-none rounded-full bg-gray-50"
          />
          <div className="text-sm leading-6">
            <strong className="font-semibold text-gray-900">Ra Uru Hu</strong> –
            Human Design Founder
          </div>
        </figcaption>
      </figure>
      <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
        Success Code 2: Personal Interaction Style
      </h2>
      <li className="flex gap-x-3">
        <CheckCircleIcon
          aria-hidden="true"
          className="mt-1 h-5 w-5 flex-none text-indigo-600"
        />
        <span>
          <strong className="font-semibold text-gray-900">
            Personal Interaction Style.
          </strong>
          Your main way of being in the world is to {hd.strategy()}.
        </span>
      </li>
      {/* <h2 className="mt-10 text-lg">
        Your daily mission is to find activities that bring you{' '}
        {hd.signatureTheme()}.
      </h2> */}
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

          <figure className="mt-10 border-l border-indigo-600 pl-9">
            <blockquote className="font-semibold text-gray-900">
              <p>
                "So many people think that waiting is a stagnant sort of dead
                space. You know, nothing is happening, nothing is going on,
                nothing's ever going on ... It doesn't mean that nothing is
                going on. Waiting can be translated as a higher state of
                alertness ... It is a state of awareness. It is being present.
                It is being ready for precisely those things that you're
                actually waiting for, waiting for that perfect stimulation that
                is going to allow you to operate correctly, to make a decision
                correctly, because you're present here now, waiting you."
              </p>
            </blockquote>
            <figcaption className="mt-6 flex gap-x-4">
              <Image
                alt="Ra Uru Hu headshot"
                src={raUruHu}
                className="h-6 w-6 flex-none rounded-full bg-gray-50"
              />
              <div className="text-sm leading-6">
                <strong className="font-semibold text-gray-900">
                  Ra Uru Hu
                </strong>{' '}
                – Human Design Founder
              </div>
            </figcaption>
          </figure>
        </>
      )}
      <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
        Success Code 3: Your Decision-Making Strategy
      </h2>
      <li className="flex gap-x-3">
        <CheckCircleIcon
          aria-hidden="true"
          className="mt-1 h-5 w-5 flex-none text-indigo-600"
        />
        <span>
          <strong className="font-semibold text-gray-900">
            Decision-Making Strategy.
          </strong>
          Your way to make decisions is to {hd.decisionMakingStrategy()}
        </span>
      </li>
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
          Your way is to<b>{hd.decisionMakingStrategy()}</b>.
        </figcaption>
      </figure>
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
        off-track. Look back at your day
      </p>
      <li className="mt-6 flex gap-x-3">
        <CheckCircleIcon
          aria-hidden="true"
          className="mt-1 h-5 w-5 flex-none text-indigo-600"
        />
        <span>
          <strong className="font-semibold text-gray-900">
            Negative key indicator.
          </strong>
          Your sign of resistance is {hd.notSelfTheme()}.
        </span>
      </li>
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
      </p>
      <p className="mt-8">
        Interestingly, actively attempting to avoid {hd.notSelfThemeAdjective()}{' '}
        can itself cause it! Thinking to yourself "oh, I don't want to feel{' '}
        {hd.notSelfThemeAdjective()}" and so let me just avoid it all together.
        And then how do you feel? Probably even more{' '}
        {hd.notSelfThemeAdjective()} than before! The only thing to do is to
        follow your decision-making strategy to {hd.decisionMakingStrategy()}.
      </p>
      <li className="mt-6 flex gap-x-3">
        <CheckCircleIcon
          aria-hidden="true"
          className="mt-1 h-5 w-5 flex-none text-indigo-600"
        />
        <span>
          <strong className="font-semibold text-gray-900">
            Positive Key indicator.
          </strong>
          You are on-track if you have a feeling of {hd.signatureTheme()}.
        </span>
      </li>
      <p className="mt-8">
        Your goal is not money, fame, or power, although those can feel good as
        well. When you feel {hd.signatureThemeAdjective()}, that is{' '}
        <b>the sign that you're in the flow</b>, that you are in alignment with
        your true self. The more you feel {hd.signatureThemeAdjective()}{' '}
        throughout the day, the more you will find yourself moving with ease.
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
      <p className="mt-8">
        This brings us to a basic Human Design teaching: the mind is never the
        best way to make decisions. It is great for taking in information and
        considering different options. But when it is time to make a decision,
        you should always {hd.authorityDescription()}.
      </p>
      <p>Let's break it down.</p>
      <h2 className="text-base">{hd.personalInteraction()} ...</h2>
      <p>{strategyWriteups.get(hd.type())}</p>
      <h2 className="text-base">{hd.authorityDescription()}</h2>
      <p>{authorityWriteups.get(hd.type())}</p>
      <h2 className="text-lg">
        Pause - observe - {hd.decisionMakingStrategy()}
      </h2>
      <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
        Want more?
      </h2>
      These
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
          Your way is to<b>{hd.decisionMakingStrategy()}</b>.
        </figcaption>
      </figure>
      <p className="mt-8">
        You have the strengths needed to be successful. Your strengths are
        different from other people's, and so it can be easy to compare with
        others and want what they have. But Human Design shows us how we are
        unique and that there's absolutely no point comparing yourself to anyone
        else. It's like comparing yourself to a cheetah: it's not your fault
        that you can't run as fast.
      </p>
    </>
  )
}

export default ChartDetail

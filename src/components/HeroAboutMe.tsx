import shawnHeadshot from '@/images/shawn-bent.jpg'
import Image from 'next/image'

export default function HeroAboutMe() {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-sky-100/20 pt-14">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-sky-600/10 ring-1 ring-sky-50 sm:-mr-80 lg:-mr-96"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto">
              Hi, I'm Shawn.
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                I used to be frustrated constantly. I would compare myself to
                others and beat myself up because I wasn't as successful as they
                were. I would look outside myself for answers, and when they
                didn't work for me, I would get even more frustrated and beat
                myself up even more!
              </p>
              <p className="mt-10 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                I used to be frustrated constantly. I would compare myself to
                others and beat myself up because I wasn't as successful as they
                were. I would look outside myself for answers, and when they
                didn't work for me, I would get even more frustrated and beat
                myself up even more!
              </p>
              <p className="mt-10 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                Now as a certified Human Design for Business (BG5) consultant, I
                teach you strategies to move yourself from frustrated, bitter,
                and angry to successful, satisfied, and at peace. I focus on
                practical tools which you can use immediately, rather than
                giving you a bunch of theory which you will immediately forget.
                Life will never be the same again.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                >
                  Get your free guide
                </a>
                {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a> */}
              </div>
            </div>
            <Image
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              src={shawnHeadshot}
              alt="Shawn Lauzon"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  )
}

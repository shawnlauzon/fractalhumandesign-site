import { Button } from './Button'
import { Header } from './Header'

interface GuideToFlowHeroProps {
  firstName: string
  lastName: string
}

export default function GuideToFlowHero({
  firstName,
  lastName,
}: GuideToFlowHeroProps) {
  return (
    <div className="bg-white">
      <div className="absolute inset-x-0 top-0 z-50">
        <Header />
      </div>

      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <p className="text-base font-semibold leading-7 text-sky-600">
                  Crafted for {firstName} {lastName}
                </p>
                <h1 className="pt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Your Personal Guide to Flow
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Inside are the keys to a more easeful life, specifically for
                  you.
                </p>
                <Button className="mt-10 flex items-center gap-x-6">
                  <a href="#top">Get started</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1545400841-4ac11ae0bfd2?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
        />
      </div>
    </div>
  )
}

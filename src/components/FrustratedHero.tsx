export default function FrustratedHero() {
  return (
    <div className="bg-white">
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
                <h1 className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                  Sick and tired of being frustrated?
                </h1>
                <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                  Perhaps you have ideas of what you want to accomplish, but
                  nothing seems to go right. You compare yourself to others, but
                  not for too long because it's depressing. Or perhaps your
                  career is technically going well, but you want more
                  satisfaction in your life, your career, or your relationships.
                  So you look for advice from your friends or social media, but
                  it doesn't seem to fit for you.
                </p>
                <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                  How to get unstuck?
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  {/* <a
                    href="#"
                    className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                  >
                    Get started
                  </a>
                  <a href="#" className="text-sm/6 font-semibold text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1638274749450-30c893afe3d1?q=80&w=2994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="aspect-[3/2] object-cover lg:aspect-auto lg:size-full"
          />
        </div>
      </div>
    </div>
  )
}

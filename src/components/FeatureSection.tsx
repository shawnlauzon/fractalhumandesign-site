import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Confidence in decision-making',
    description:
      'When you learn how to make aligned decisions, you can let go of depending on others for advice. And do things your own way.',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Clarity of strengths and challenges',
    description:
      'Discover natural abilities you may not even know. Become aware of your challenges and avoid allowing them to ruin your life.',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Connection to your true self',
    description:
      'The things you beat yourself up for are simply part of your design. When you know your true self, you can stop fighting against yourself.',
    href: '#',
    icon: ArrowPathIcon,
  },
]

export default function FeatureSection() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-sky-400">
            Discover your true nature
          </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-balance">
            You are not the problem
          </p>
          <p className="mt-6 text-lg/8 text-gray-300">
            You have a unique set of gifts which are natural to you, and your
            own way of expressing them. When you tap into them and learn to
            trust yourself, you will begin to create the life that you truly
            want, not just what society tells you that you should want.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-white">
                  <feature.icon
                    aria-hidden="true"
                    className="size-5 flex-none text-sky-400"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    {/* <a
                      href={feature.href}
                      className="text-sm/6 font-semibold text-sky-400"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a> */}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

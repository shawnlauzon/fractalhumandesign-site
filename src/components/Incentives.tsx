const incentives = [
  {
    name: 'Group support',
    imageSrc:
      'https://tailwindui.com/plus/img/ecommerce/icons/icon-shipping-simple.svg',
    description:
      'Anyone who buys a service is invited to join our private Facebook group where you can ask questions and get to know each other.',
  },
  {
    name: 'Satisfaction guarantee',
    imageSrc:
      'https://tailwindui.com/plus/img/ecommerce/icons/icon-warranty-simple.svg',
    description:
      "If you're not completely satisfied with what you've learned, we ask you to give me the chance to make it better. If I can't, I'll refund your payment.",
  },
  {
    name: 'Family discounts and early access',
    imageSrc:
      'https://tailwindui.com/plus/img/ecommerce/icons/icon-exchange-simple.svg',
    description:
      "As a Generator, I am constantly building new things. You'll be the first to know. And you'll always get a discount on anything I offer.",
  },
]

export default function Incentives() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              You're treated like family
            </h2>
            <p className="mt-4 text-gray-500">
              I want you to have the life you deserve. And I'll do whatever I
              can to make that happen. When you purchase any of my offerings,
              you'll receive the following:
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:shrink-0">
                  <img alt="" src={incentive.imageSrc} className="size-16" />
                </div>
                <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-sm font-medium text-gray-900">
                    {incentive.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

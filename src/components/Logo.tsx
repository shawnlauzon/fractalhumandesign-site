import fhdLogoBgDark from '@/images/logos/fhd-bg-dark.svg'
import fhdLogoBgLight from '@/images/logos/fhd-bg-light.svg'
import fhdIconLogo from '@/images/logos/fhd-icon.svg'
import Image from 'next/image'

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <div className="px-md-12 mx-auto flex flex-row items-center justify-between px-4 py-2">
      <Image
        className="hidden md:block dark:hidden"
        src={fhdLogoBgLight}
        alt="Fractal Human Design Logo"
        priority={true}
        height={100}
      />
      <Image
        className="hidden md:dark:block"
        src={fhdLogoBgDark}
        alt="Fractal Human Design Logo"
        priority={true}
        height={100}
      />
      <Image
        className="md:hidden"
        src={fhdIconLogo}
        alt="Fractal Human Design Logo"
        priority={true}
        height={100}
      />
    </div>
  )
}

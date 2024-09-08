import raUruHu from '@/images/avatars/ra-uru-hu.jpg'
import Image from 'next/image'
import { ReactNode } from 'react'

export function RaQuote({ children }: { children: ReactNode }) {
  return (
    <figure className="mt-10 border-l border-sky-600 pl-9">
      <blockquote className="font-semibold text-gray-900">
        <p>"{children}"</p>
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
  )
}

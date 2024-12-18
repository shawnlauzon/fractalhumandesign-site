import winner from '@/images/winner.jpg'
import Image from 'next/image'
import { Container } from './Container'

export default function Success() {
  return (
    <Container>
      <div className="grid min-h-full grid-cols-1 grid-rows-[1fr,auto,1fr] bg-white lg:grid-cols-[max(50%,36rem),1fr]">
        <div className="max-w-lg">
          <p className="text-base font-semibold leading-8 text-sky-600">
            Nice work!
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Your guide is on its way
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Be sure to check your spam folder.
          </p>
          <div className="mt-10">
            <a
              href="/#"
              className="text-sm font-semibold leading-7 text-sky-600"
            >
              <span aria-hidden="true">&larr;</span> Back to home
            </a>
          </div>
        </div>
        <div className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
          <Image
            alt="Two people giving a high five"
            src={winner}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </Container>
  )
}

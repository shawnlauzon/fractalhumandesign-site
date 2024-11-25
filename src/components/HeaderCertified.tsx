import Link from 'next/link'

export default function HeaderCertified() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Certification matters
          </h2>
          <p className="mt-8 text-pretty text-sm font-medium text-gray-500 sm:text-xl/8">
            I am a Licensed Certified BG5BI Professional officially trained
            through the{' '}
            <Link href="https://bg5businessinstitute.com/" target="_blank">
              BG5BI Business Institute
            </Link>
            . Please check out{' '}
            <Link
              href="https://bg5businessinstitute.com/professionals?id=26016e66-f397-4154-b50f-71a587a7248d"
              target="_blank"
            >
              my listing on the BG5BI Business Institute Website
            </Link>
            .
          </p>
          <p className="mt-8 text-pretty text-sm font-medium text-gray-500 sm:text-xl/8">
            Please be aware that there are individuals using The Human Design,
            BG5 & OC16 Systems that are not legally sanctioned by Jovian Archive
            (rights holder) or the BG5 Business Institute, nor certified or
            licensed by the International Human Design School or the BG5
            Business Institute (professional certification authorities). When
            you work with me, you can be confident that you are receiving the
            information from someone who has been properly trained and certified
            as a BG5 Professional.
          </p>
        </div>
      </div>
    </div>
  )
}

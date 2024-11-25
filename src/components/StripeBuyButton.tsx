import Link from 'next/link'
import React from 'react'

interface StripeBuyButtonProps {
  label?: string
  url: string
}

const StripeBuyButton: React.FC<StripeBuyButtonProps> = ({
  label = 'Buy Now',
  url,
}) => {
  return (
    <Link
      href={url}
      className="inline-block min-w-full transform rounded-md bg-blue-600 px-6 py-3 text-center font-semibold text-white shadow-lg transition-transform hover:scale-105 focus:ring-4 focus:ring-blue-300"
    >
      {label}
    </Link>
  )
}

export default StripeBuyButton

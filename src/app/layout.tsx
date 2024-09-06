import clsx from 'clsx'
import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Fractal Human Design',
    default: 'Fractal Human Design - Owners Manual for Being in the Flow',
  },
  description: 'Discover how to create less frustration and more joy.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}

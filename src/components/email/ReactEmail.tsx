import {
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Tailwind,
} from '@react-email/components'
import React from 'react'
import { Footer } from '../Footer'
import { Signature } from './Signature'

interface ReactEmailProps {
  title: string
  children: React.ReactNode
}

export const ReactEmail: React.FC<ReactEmailProps> = ({ title, children }) => {
  return (
    <Html lang="en">
      <Tailwind>
        <Head />
        <Preview>Fractal Human Design - {title}</Preview>
        <Container className="bg-sky-50 p-[32px]">
          <Img src="https://fractalhumandesign.s3.amazonaws.com/site/images/fhd-flow-guide-email-header.png" />
          {children}
          <Signature />
          <Hr className="my-[16px] !border-gray-400" />
          <Footer />
        </Container>
      </Tailwind>
    </Html>
  )
}

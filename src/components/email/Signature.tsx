import { Heading, Img, Link, Row, Section, Text } from '@react-email/components'

export const Signature = () => (
  <Row>
    <Section className="mt-[5px] inline-block max-h-[48px] max-w-[48px] text-left">
      <Img
        alt="Shawn Lauzon"
        className="block h-[48px] w-[48px] rounded-full object-cover object-center"
        height={48}
        src="https://fractalhumandesign.s3.us-east-1.amazonaws.com/site/images/headshot-shawn.jpg"
        width={48}
      />
    </Section>
    <Section className="ml-[18px] inline-block max-w-[360px] text-left align-top">
      <Heading
        as="h3"
        className="m-[0px] text-[14px] font-medium leading-[20px] text-gray-800"
      >
        Shawn Lauzon
      </Heading>
      <Text className="m-[0px] text-[12px] font-medium leading-[14px]">
        Certified Human Design for Business BG5 Career & Business Consultant
      </Text>
      <Section className="mt-[4px]">
        <Link
          className="inline-flex h-[12px] w-[12px]"
          href="https://x.com/shawnlauzon"
        >
          <Img
            alt="X"
            src="https://react.email/static/x-icon.png"
            style={{ height: '12px', width: '12px' }}
          />
        </Link>
        <Link
          className="ml-[8px] inline-flex h-[12px] w-[12px]"
          href="https://linkedin.com/in/shawnlauzon"
        >
          <Img
            alt="LinkedIn"
            src="https://react.email/static/in-icon.png"
            style={{ height: '12px', width: '12px' }}
          />
        </Link>
        <Link
          className="ml-[8px] inline-flex h-[12px] w-[12px]"
          href="https://instagram.com/shawnlauzon"
        >
          <Img
            alt="Instagram"
            style={{ height: '12px', width: '12px' }}
            src="https://react.email/static/instagram-logo.png"
          />
        </Link>
        <Link
          className="ml-[8px] inline-flex h-[12px] w-[12px]"
          href="https://facebook.com/shawnlauzon"
        >
          <Img
            alt="Facebook"
            style={{ height: '12px', width: '12px' }}
            src="https://react.email/static/facebook-logo.png"
          />
        </Link>
      </Section>
    </Section>
  </Row>
)

import { Column, Img, Link, Row, Text } from '@react-email/components'

export const Footer = () => (
  <Row>
    <Column colSpan={4}>
      <Img
        alt="Fractal Human Design logo"
        height="42"
        src="https://fractalhumandesign.s3.us-east-1.amazonaws.com/site/images/logo-icon-bg-light-150x150.png"
      />
      <Text className="my-[8px] text-[16px] font-semibold leading-[24px] text-gray-900">
        Fractal Human Design
      </Text>
      <Text className="mb-[0px] mt-[4px] text-[16px] leading-[24px]">
        Quantum Connecting Technologies, Inc.
      </Text>
    </Column>
    <Column align="left" className="table-cell align-bottom">
      <Row className="table-cell h-[44px] w-[56px] align-bottom">
        {/* <Column className="pr-[8px]">
            <Link href="#">
              <Img
                alt="Facebook"
                height="36"
                src="https://react.email/static/facebook-logo.png"
                width="36"
              />
            </Link>
          </Column> */}
        <Column className="pr-[8px]">
          <Link href="https://x.com/shawnlauzon" target="_blank">
            <Img
              alt="X"
              height="36"
              src="https://react.email/static/x-logo.png"
              width="36"
            />
          </Link>
        </Column>
        <Column>
          <Link href="https://instagram.com/shawnlauzon" target="_blank">
            <Img
              alt="Instagram"
              height="36"
              src="https://react.email/static/instagram-logo.png"
              width="36"
            />
          </Link>
        </Column>
      </Row>
      <Row>
        <Text className="my-[8px] text-[16px] font-semibold leading-[24px]">
          <Link href="{{{ pm:unsubscribe }}}">Unsubscribe</Link> | 1800 W 68th
          St. Suite 118, Hialeah, FL 33014
        </Text>
        <Text className="mb-[0px] mt-[4px] text-[16px] font-semibold leading-[24px]">
          help@fractalhumandesign.com | (512) 956-9624
        </Text>
      </Row>
    </Column>
  </Row>
)

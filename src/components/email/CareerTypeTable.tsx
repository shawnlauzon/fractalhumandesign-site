import { Column, Hr, Row, Section, Text } from '@react-email/components'

export function CareerTypeTable() {
  return (
    <Section className="my-[16px] w-[80%]">
      <Hr className="mx-0 my-[32px] w-full border border-solid !border-gray-300" />
      <Section>
        <Row>
          <Text className="m-0 text-[24px] font-semibold leading-[32px] text-gray-900">
            Human Design for Business Career Types
          </Text>
          <Text className="mt-[8px] text-[16px] leading-[24px] text-gray-500">
            Combine practicality and style effortlessly with our furniture,
            offering functional designs that enhance your living space.
          </Text>
        </Row>
      </Section>
      <Section>
        <Section>
          <Row>
            <Column className="align-baseline">
              <table className="text-center">
                <td
                  align="center"
                  className="h-[40px] w-[40px] rounded-full bg-sky-200 p-0"
                >
                  <Text className="m-0 font-semibold text-sky-600">💡</Text>
                </td>
              </table>
            </Column>
            <Column className="w-[85%]">
              <Text className="m-0 text-[20px] font-semibold leading-[28px] text-gray-900">
                Initiator
              </Text>
              <Text className="m-0 mt-[8px] text-[16px] leading-[24px] text-gray-500">
                Gets things started
              </Text>
            </Column>
          </Row>
        </Section>
      </Section>
      <Section>
        <Hr className="mx-0 my-[32px] w-full border border-solid !border-gray-300" />
        <Section>
          <Row>
            <Column className="align-baseline">
              <table className="text-center">
                <td
                  align="center"
                  className="h-[40px] w-[40px] rounded-full bg-sky-200 p-0"
                >
                  <Text className="m-0 font-semibold text-sky-600">🔥</Text>
                </td>
              </table>
            </Column>
            <Column className="w-[85%]">
              <Text className="m-0 text-[20px] font-semibold leading-[28px] text-gray-900">
                Builder
              </Text>
              <Text className="m-0 mt-[8px] text-[16px] leading-[24px] text-gray-500">
                Creates what is needed
              </Text>
            </Column>
          </Row>
        </Section>
      </Section>
      <Section>
        <Hr className="mx-0 my-[32px] w-full border border-solid !border-gray-300" />

        <Section>
          <Row>
            <Column className="align-baseline">
              <table className="text-center">
                <td
                  align="center"
                  className="h-[40px] w-[40px] rounded-full bg-sky-200 p-0"
                >
                  <Text className="m-0 font-semibold text-sky-600">🔑</Text>
                </td>
              </table>
            </Column>
            <Column className="w-[85%]">
              <Text className="m-0 text-[20px] font-semibold leading-[28px] text-gray-900">
                Advisor
              </Text>
              <Text className="m-0 mt-[8px] text-[16px] leading-[24px] text-gray-500">
                Helps individuals reach peak performance
              </Text>
            </Column>
          </Row>
        </Section>
      </Section>
      <Section>
        <Hr className="mx-0 my-[32px] w-full border border-solid !border-gray-300" />
        <Section>
          <Row>
            <Column className="align-baseline">
              <table className="text-center">
                <td
                  align="center"
                  className="h-[40px] w-[40px] rounded-full bg-sky-200 p-0"
                >
                  <Text className="m-0 font-semibold text-sky-600">🔍</Text>
                </td>
              </table>
            </Column>
            <Column className="w-[85%]">
              <Text className="m-0 text-[20px] font-semibold leading-[28px] text-gray-900">
                Evaluator
              </Text>
              <Text className="m-0 mt-[8px] text-[16px] leading-[24px] text-gray-500">
                Ensures everything is running smoothly
              </Text>
            </Column>
          </Row>
        </Section>
      </Section>
      <Hr className="mx-0 my-[32px] w-full border border-solid !border-gray-300" />
    </Section>
  )
}

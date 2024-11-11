import { SimpleChart } from '@/types/SimpleChart'
import _ from 'lodash'

// type
export const types = [
  'Generator',
  'Manifesting Generator',
  'Manifestor',
  'Projector',
  'Reflector',
]

export const typeVideos = [
  'https://youtu.be/9PVgkBzpPqs',
  'https://youtu.be/9PVgkBzpPqs',
  'https://youtu.be/qvnRU2tdNXM',
  'https://youtu.be/Od8wVEL5b5w',
  'https://youtu.be/bgdaZBB2wCo',
]

export const strategyVideos = [
  'https://youtu.be/_g3cx77EeLs',
  'https://youtu.be/_g3cx77EeLs',
  'https://youtu.be/YTTm9Ziyi-8',
  'https://youtu.be/vypbRJShWyM',
  'https://youtu.be/924KXvH3mv4',
]

export const strategyVideoMG = 'https://youtu.be/OkRewoajREQ'
export const sleepAloneProjectors = 'https://youtu.be/A1PBKKAJslo'
export const projectorAuthority = 'https://youtu.be/JmMgm2KduZc'

export const careerDesigns = [
  '🛠️ Classic Builder',
  '🛠️ Express Builder',
  '💡 Initiator',
  '🔑 Advisor',
  '🔍 Evaluator',
]
export const centers = [
  'root',
  'sacral',
  'splenic',
  'solarplexus',
  'ego',
  'gcenter',
  'throat',
  'ajna',
  'head',
]

export const authorityTypes = [
  'emotional',
  'sacral',
  'splenic',
  'outer',
  'self projected',
  'ego',
  'lunar',
]

export const authorityVideos = [
  'https://youtu.be/e9g6q1pKJeo',
  'https://youtu.be/0sUPwjp025M',
  'https://youtu.be/7S552VXC1tk',
  'https://youtu.be/OvSo9Aa2XCc',
  'https://youtu.be/cF6CxUTGmfU',
  'https://youtu.be/8Nu3WvcQ0jA',
  'https://youtu.be/Kv1Ris11EMs',
]

export const signatureThemes = [
  'https://youtu.be/fHGRdJSyE34',
  'https://youtu.be/fHGRdJSyE34',
  'https://youtu.be/UfkIprGbdHw',
  'https://youtu.be/eHWeVZIMrTw',
  'https://youtu.be/ltxpSWRx5t4',
]

export const signatureVideos = [
  'satisfaction',
  'satisfaction',
  'peace',
  'success',
  'surprise',
]

export const signatureThemesAdjectives = [
  'satisfied',
  'satisfied',
  'peaceful',
  'successful',
  'surprised',
]

export const notSelfThemes = [
  'frustration',
  'frustration',
  'anger',
  'bitterness',
  'disappointment',
]
export const notSelfThemesAdjectives = [
  'frustrated',
  'frustrated',
  'angry',
  'bitter',
  'disappointed',
]
export const strategies = [
  'wait to respond before engaging',
  'wait to respond before engaging',
  'inform before taking action',
  'wait for recognition and invitation',
  'wait a 28 day cycle to reflect and assess',
]

export const authorityDescriptions = [
  'wait for clarity',
  'follow your gut',
  'follow your instincts',
  'follow your willful determination',
  'listen to what you say',
  'listen to what you say',
  'discuss with others',
]

export const definitions = [
  'none',
  'single',
  'split',
  'triple split',
  'quadruple split',
]

export const assimilationStyles = [
  'objective',
  'independent',
  'collaborative',
  'synthesizing',
  'subjective',
]

export const pentaRoleStrengths = [
  ['31', '7'],
  ['8', '1'],
  ['33', '13'],
]
export const pentaManagedStrengths = [
  ['15', '5'],
  ['2', '14'],
  ['46', '29'],
]
export const oc16Strengths = [
  ['50', '27'],
  ['59', '6'],
  ['60', '3'],
  ['14', '2'],
  ['25', '51'],
  ['21', '45'],
]

export default function (chart: SimpleChart) {
  const type = () => types[chart.type]
  const strategy = () => strategies[chart.type]
  const authority = () => authorityTypes[chart.authority]
  const authorityDescription = () => authorityDescriptions[chart.authority]
  const definition = () => definitions[chart.definition]
  const profile = () => {
    const p = chart.profile.toString()
    return `${p[0]}/${p[1]}`
  }

  const isOpportunist = () => chart.profile.toFixed().includes('4')

  const careerDesign = () => careerDesigns[chart.type]
  const signatureTheme = () => signatureThemes[chart.type]
  const notSelfTheme = () => notSelfThemes[chart.type]
  const signatureThemeAdjective = () => signatureThemesAdjectives[chart.type]
  const notSelfThemeAdjective = () => notSelfThemesAdjectives[chart.type]
  const assimilationStyle = () => assimilationStyles[chart.definition]
  const decisionMakingStrategy = () =>
    chart.type === 2
      ? `${authorityDescriptions[chart.type]}, and then ${
          strategies[chart.authority]
        }`
      : `${strategies[chart.type]}, and then ${
          authorityDescriptions[chart.authority]
        }`
  const personalInteraction = () => strategies[chart.type]

  const toString = () =>
    `${profile()} ${_.capitalize(authority())} ${_.startCase(
      _.toLower(type()),
    )}`

  const gates = () =>
    _.reduce(
      chart.gates,
      function (gates, val) {
        gates.push(val.gate)
        return gates
      },
      <number[]>[],
    )

  // function hasPentaRoleStrengths() {
  //   const gates = chart.gates
  //   return pentaRoleStrengths.reduce(
  //     (a, v) => !!((gates.includes(v[0]) && gates.includes(v[1])) || a),
  //     false,
  //   )
  // }

  // function hasPentaManagedStrengths() {
  //   const gates = chart.gates
  //   return pentaManagedStrengths.reduce(
  //     (a, v) => !!((gates.includes(v[0]) && gates.includes(v[1])) || a),
  //     false,
  //   )
  // }

  // function hasOc16Strengths() {
  //   const gates = chart.gates
  //   return oc16Strengths.reduce(
  //     (a, v) => !!((gates.includes(v[0]) && gates.includes(v[1])) || a),
  //     false,
  //   )
  // }

  // function hasMoneyLineGate() {
  //   const gates = chart.gates
  //   return gates.includes('45') || gates.includes('21')
  // }

  // function definedCenters() {
  //   return _.reduce(
  //     chart.centers,
  //     function (result, value, key) {
  //       if (value === 2) {
  //         result.push(chart.centers[key])
  //       }
  //       return result
  //     },
  //     [],
  //   )
  // }

  // function undefinedCenters() {
  //   return _.reduce(
  //     chart.centers,
  //     function (result, value, key) {
  //       if (value !== 2) {
  //         result.push(centers[key])
  //       }
  //       return result
  //     },
  //     [],
  //   )
  // }

  return {
    type,
    isGenerator: () => chart.type === 0,
    isReflector: () => chart.type === 1,
    isManifestor: () => chart.type === 2,
    isProjector: () => chart.type === 3,
    careerDesign,
    strategy,
    authority,
    definition,
    assimilationStyle,
    profile,
    toString,
    signatureTheme,
    notSelfTheme,
    signatureThemeAdjective,
    notSelfThemeAdjective,
    decisionMakingStrategy,
    personalInteraction,
    authorityDescription,
    isOpportunist,
    gates,
    // definedCenters,
    // undefinedCenters,
    // hasPentaManagedStrengths,
    // hasPentaRoleStrengths,
    // hasOc16Strengths,
    // hasMoneyLineGate,
  }
}

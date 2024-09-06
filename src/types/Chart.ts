export type Chart = {
  planets: Planet[]
  gates: Gate[]
  channels: number[]
  centers: number[]
  profile: number
  cross: number
  variable: number
  designBaseOrientation: number
  determination: number
  cognition: number
  environment: number
  personalityBaseOrientation: number
  motivation: number
  transference: number
  sense: number
  view: number
  type: number
  authority: number
  definition: number
  group: Group
  cycles: Cycles
}

type Planet = {
  activation: number
  base: number
  color: number
  fixing: Fixing
  gate: number
  line: number
  tone: number
  basePercent: number
  colorPercent: number
  gatePercent: number
  id: number
  longitude: number
  linePercent: number
  tonePercent: number
  chartId: number
  baseAlignment: number
}

type Fixing = {
  triggers: Trigger[]
  state: number
  conditioned: boolean
}

type Trigger = {
  state: number
  planet: number
  activation: number
  gate: number
  line: number
  chartId: number
}

type Gate = {
  gate: number
  mode: number
}

type Group = {
  env: string[]
  lg: number[]
  th: number[]
}

type Cycles = {
  chiron: string
  saturn: string
  uranus: string
  secondSaturn: string
}

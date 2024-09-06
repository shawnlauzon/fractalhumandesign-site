export interface SimpleChartData {
  id: string
  user: {
    id: string
    firstName: string
    lastName: string
    email: string
  }
  chart: SimpleChart
  meta: {
    birthData: {
      time: {
        utc: string
      }
    }
  }
}

export interface SimpleChart {
  type: number
  authority: number
  gates: Gate[]
  definition: number
  centers: number[]
  profile: number
}

interface Gate {
  gate: number
  mode: number
}

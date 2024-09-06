export interface SimpleChart {
  id: string
  user: {
    id: string
    firstName: string
    lastName: string
    email: string
  }
  chart: {
    type: number
    authority: number
    gates: Gate[]
    definition: number
    centers: number[]
    profile: number
  }
  meta: {
    birthData: {
      time: {
        utc: string
      }
    }
  }
}

interface Gate {
  gate: number
  mode: number
}

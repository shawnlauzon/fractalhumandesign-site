export type Meta = {
  type: string
  name: string
  tags: string[]
  created: string
  updated: string
  dirty: boolean
  birthData: {
    location: {
      country: {
        id: string
        name: string
      }
      city: {
        name: string
        timezone: string
        tz: string
      }
    }
    time: {
      local: string
      utc: string
      status: string
      timezone: {
        id: string
        name: string
        offset: number
      }
    }
    reliability: {
      score: number
      context: string
      changes: {
        authority: number
        cross: number
        definition: number
        profile: number
        type: number
        variable: number
        channels: number
        centers: number
      }
    }
  }
}

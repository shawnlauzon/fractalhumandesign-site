import { ChartData } from './ChartData'
import { Meta } from './Meta'
import { User } from './User'

export type Chart = {
  id: string
  user: User
  chart: ChartData
  meta: Meta
}

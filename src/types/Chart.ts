import { ChartContent } from './ChartContent'
import { Meta } from './Meta'
import { User } from './User'

export type Chart = {
  id: string
  user: User
  chart: ChartContent
  meta: Meta
}

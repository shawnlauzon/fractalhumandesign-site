import { Chart } from '@/types/Chart'
import { Meta } from '@/types/Meta'
import { User } from '@/types/User'

export type ChartData = {
  chart: Chart
  meta: Meta
  user?: User
}

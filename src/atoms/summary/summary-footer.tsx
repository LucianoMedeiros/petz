import { formatBRL } from '@/utils/format-brl'
import { ReactNode } from 'react'
import GridCol from '../grid/grid-col'
import GridRow from '../grid/grid-row'
import SummaryTotal from './summary-total'

type Props = {
  children: ReactNode
  total: number
}

const SummaryFooter = ({ total, children }: Props) => {
  return (
    <GridRow verticalAlign='middle'>
      <GridCol span={6}>
        <SummaryTotal>{`Valor Total: ${formatBRL(total)}`}</SummaryTotal>
      </GridCol>
      <GridCol span={6} horizontalAlign='right'>
        {children}
      </GridCol>
    </GridRow>
  )
}

export default SummaryFooter

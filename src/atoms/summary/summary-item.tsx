import GridCol from '../grid/grid-col'
import GridRow from '../grid/grid-row'
import SummaryLabel from './summary-label'
import SummaryValue from './summary-value'

type Props = {
  value: string
  label: string
}

const SummaryItem = ({ value, label }: Props) => {
  return (
    <GridRow gap={5}>
      <GridCol span={10}>
        <SummaryLabel>{label}</SummaryLabel>
      </GridCol>
      <GridCol span={2} horizontalAlign='right'>
        <SummaryValue>{value}</SummaryValue>
      </GridCol>
    </GridRow>
  )
}

export default SummaryItem

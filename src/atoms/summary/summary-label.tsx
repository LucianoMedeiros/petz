import { ReactNode } from 'react'
import { SummaryLabelContainer } from './styles'

type Props = {
  children: string | ReactNode
}

const SummaryLabel = ({ children }: Props) => {
  return <SummaryLabelContainer>{children}</SummaryLabelContainer>
}

export default SummaryLabel

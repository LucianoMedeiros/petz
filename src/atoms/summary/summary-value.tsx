import { ReactNode } from 'react'
import { SummaryValueContainer } from './styles'

type Props = {
  children: string | ReactNode
}

const SummaryValue = ({ children }: Props) => {
  return <SummaryValueContainer>{children}</SummaryValueContainer>
}

export default SummaryValue

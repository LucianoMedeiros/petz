import { ReactNode } from 'react'
import { SummaryTotalContainer } from './styles'

type Props = {
  children: string | ReactNode
}

const SummaryTotal = ({ children }: Props) => {
  return <SummaryTotalContainer>{children}</SummaryTotalContainer>
}

export default SummaryTotal

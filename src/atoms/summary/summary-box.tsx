import { ReactNode } from 'react'
import { SummaryBoxContainer } from './styles'

type Props = {
  children: string | ReactNode
}

const SummaryBox = ({ children }: Props) => {
  return <SummaryBoxContainer>{children}</SummaryBoxContainer>
}

export default SummaryBox

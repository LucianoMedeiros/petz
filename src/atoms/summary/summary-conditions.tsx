import { ReactNode } from 'react'
import { SummaryConditionsContainer } from './styles'

type Props = {
  children: string | ReactNode
}

const SummaryConditions = ({ children }: Props) => {
  return <SummaryConditionsContainer>{children}</SummaryConditionsContainer>
}

export default SummaryConditions

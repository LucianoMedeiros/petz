import { ReactNode } from 'react'
import { TemplateContentContainer } from './styles'

type Props = {
  children: ReactNode | ReactNode[]
}

const TemplateContainer = ({ children }: Props) => {
  return <TemplateContentContainer>{children}</TemplateContentContainer>
}

export default TemplateContainer

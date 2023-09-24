import { ContainerGroup, TemplateContentContainer } from '@/atoms/template-container/styles'
import Footer from '@/organisms/footer/footer'
import Header from '@/organisms/header/header'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode | ReactNode[]
}

const MainTemplate = ({ children }: Props) => {
  return (
    <TemplateContentContainer>
      <ContainerGroup>
        <Header />
        {children}
      </ContainerGroup>
      <Footer />
    </TemplateContentContainer>
  )
}

export default MainTemplate

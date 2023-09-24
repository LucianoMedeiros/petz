import SafeArea from '@/atoms/safe-area/safe-area'
import { CopyrightText, FooterContainer } from './styles'

const Footer = () => {
  return (
    <FooterContainer>
      <SafeArea>
        <CopyrightText>Todas as marcas e ilustrações utilizadas são de seus respectivos donos.</CopyrightText>
      </SafeArea>
    </FooterContainer>
  )
}

export default Footer

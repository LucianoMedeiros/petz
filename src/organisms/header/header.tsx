import Logo from '@/atoms/logo/logo'
import SafeArea from '@/atoms/safe-area/safe-area'
import Menu from '@/molecules/menu/menu'
import { HeaderContainer } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <SafeArea>
        <Logo />
        <Menu />
      </SafeArea>
    </HeaderContainer>
  )
}

export default Header

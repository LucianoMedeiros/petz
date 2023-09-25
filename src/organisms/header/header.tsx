import Logo from '../../atoms/logo/logo'
import SafeArea from '../../atoms/safe-area/safe-area'
import Menu from '../../molecules/menu/menu'
import { HeaderContainer } from './styles'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  const pathnamePage = router.pathname
  return (
    <HeaderContainer>
      <SafeArea>
        <Logo currentPage={pathnamePage} />
        <Menu />
      </SafeArea>
    </HeaderContainer>
  )
}

export default Header

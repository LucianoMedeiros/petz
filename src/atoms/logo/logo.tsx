import { pageRoutes } from '@/routes/page-routes'
import { RootState, useAppDispatch, useAppSelector } from '@/store/store-config'
import { UIActions } from '@/store/ui/ui-reducer'
import classNames from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { LogoContainer, LogoText } from './styles'

const Logo = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const pathnamePage = router.pathname

  const isLogoCollapsible = useAppSelector((state: RootState) => state.ui.isLogoCollapsible)

  useEffect(() => {
    if (pathnamePage === '/') {
      dispatch(UIActions.setCollapsebleLogo(true))
    } else {
      dispatch(UIActions.setCollapsebleLogo(false))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <LogoContainer href={pageRoutes.home} className={classNames({ collapse: isLogoCollapsible })}>
      <Image src='/images/white-pokeball.svg' alt='Pokeball Logo' width={34} height={34} />
      <LogoText>Centro Pokémon</LogoText>
    </LogoContainer>
  )
}

export default Logo

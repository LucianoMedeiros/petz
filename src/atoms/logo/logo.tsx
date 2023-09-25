import classNames from 'classnames'
import Image from 'next/image'
import { useEffect } from 'react'
import { pageRoutes } from '../../routes/page-routes'
import { RootState, useAppDispatch, useAppSelector } from '../../store/store-config'
import { UIActions } from '../../store/ui/ui-reducer'
import { LogoContainer, LogoText } from './styles'

type Props = {
  currentPage: string
}

const Logo = ({ currentPage }: Props) => {
  const dispatch = useAppDispatch()

  const isLogoCollapsible = useAppSelector((state: RootState) => state.ui.isLogoCollapsible)

  useEffect(() => {
    if (currentPage === pageRoutes.home) {
      dispatch(UIActions.setCollapsebleLogo(true))
    } else {
      dispatch(UIActions.setCollapsebleLogo(false))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <LogoContainer href={pageRoutes.home} data-testid='logo-component' className={classNames({ collapse: isLogoCollapsible })}>
      <Image src='/images/white-pokeball.svg' alt='Pokeball Logo' width={34} height={34} />
      <LogoText>Centro Pokémon</LogoText>
    </LogoContainer>
  )
}

export default Logo

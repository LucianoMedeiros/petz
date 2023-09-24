import classNames from 'classnames'
import { ReactNode } from 'react'
import { ButtonContainer } from './styles'

type Props = {
  [key: string]: any
  children: string | ReactNode | ReactNode[]
  secondary?: boolean
  iconButton?: boolean
}

const Button = ({ children, secondary, iconButton, ...rest }: Props) => {
  return (
    <ButtonContainer className={classNames({ secondary }, { 'icon-button': iconButton })} {...rest}>
      {children}
    </ButtonContainer>
  )
}

export default Button

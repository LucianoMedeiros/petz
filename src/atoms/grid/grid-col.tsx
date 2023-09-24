import classNames from 'classnames'
import { ReactNode } from 'react'
import { GridColContainer } from './styles'

type Props = {
  children: ReactNode | ReactNode[]
  span?: number
  horizontalAlign?: 'center' | 'right'
}

const GridCol = ({ children, span, horizontalAlign }: Props) => {
  return (
    <GridColContainer
      className={classNames({
        [`grid-${span}`]: span,
        'horizontal-align-center': horizontalAlign == 'center',
        'horizontal-align-right': horizontalAlign == 'right',
      })}
    >
      {children}
    </GridColContainer>
  )
}

export default GridCol

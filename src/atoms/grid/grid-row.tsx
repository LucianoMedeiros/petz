import classNames from 'classnames'
import { ReactNode } from 'react'
import { GridRowContainer } from './styles'

type Props = {
  children: ReactNode | ReactNode[]
  verticalAlign?: 'middle' | 'bottom'
  gap?: number
}

const GridRow = ({ children, verticalAlign, gap = 20 }: Props) => {
  return (
    <GridRowContainer
      gap={gap}
      className={classNames({
        'vertical-align-middle': verticalAlign == 'middle',
        'vertical-align-bottom': verticalAlign == 'bottom',
      })}
    >
      {children}
    </GridRowContainer>
  )
}

export default GridRow

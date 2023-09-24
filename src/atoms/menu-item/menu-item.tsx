import { SchedulerActions } from '@/store/scheduler/scheduler-reducer'
import { useAppDispatch } from '@/store/store-config'
import classNames from 'classnames'
import { MenuItemContainer, MenuItemLink } from './styles'

type ItemMenuProps = {
  highlighted?: boolean
  children: string
  linkPath: string
}

const MenuItem = ({ linkPath, highlighted = false, children }: ItemMenuProps) => {
  const dispatch = useAppDispatch()
  const handleClick = () => {
    dispatch(SchedulerActions.resetState())
  }

  return (
    <MenuItemContainer>
      <MenuItemLink onClick={handleClick} href={linkPath} className={classNames({ highlighted })}>
        {children}
      </MenuItemLink>
    </MenuItemContainer>
  )
}

export default MenuItem

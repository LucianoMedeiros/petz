import MenuItem from '@/atoms/menu-item/menu-item'
import { pageRoutes } from '@/routes/page-routes'
import { MenuContainer } from './styles'

export interface ItemMenuType {
  highlighted?: boolean
  text: string
  linkPath: string
}

const Menu = () => {
  const menuList: ItemMenuType[] = [
    {
      text: 'Quem Somos',
      linkPath: pageRoutes.aboutUs,
      highlighted: false,
    },
    {
      text: 'Agendar Consulta',
      linkPath: pageRoutes.scheduleAppointment,
      highlighted: true,
    },
  ]
  return (
    <MenuContainer>
      {menuList.map((item) => (
        <MenuItem key={item.text} linkPath={item.linkPath} highlighted={item.highlighted}>
          {item.text}
        </MenuItem>
      ))}
    </MenuContainer>
  )
}

export default Menu

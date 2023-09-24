import { BreadcrumbType } from '@/molecules/breadcrumb/breadcrumb'
import { BreadcrumbItemContainer, BreadcrumbItemLink } from './styles'

type Props = {
  info: BreadcrumbType
}

const BreadcrumbItem = ({ info }: Props) => {
  return (
    <BreadcrumbItemContainer>
      <BreadcrumbItemLink href={info.url}>{info.text}</BreadcrumbItemLink>
    </BreadcrumbItemContainer>
  )
}

export default BreadcrumbItem

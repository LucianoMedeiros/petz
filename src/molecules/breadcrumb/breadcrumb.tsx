import BreadcrumbItem from '@/atoms/breadcrumb-item/breadcrumb-item'
import { BreadcrumbContainer } from './styles'

export type BreadcrumbType = {
  text: string
  url: string
}

type Props = {
  items: BreadcrumbType[]
}

const Breadcrumb = ({ items }: Props) => {
  return (
    <BreadcrumbContainer>
      {items?.map((item) => (
        <BreadcrumbItem key={item.text} info={item} />
      ))}
    </BreadcrumbContainer>
  )
}

export default Breadcrumb

import SafeArea from '@/atoms/safe-area/safe-area'
import Breadcrumb, { BreadcrumbType } from '@/molecules/breadcrumb/breadcrumb'
import { PageHeaderContainer, PageHeaderDescription, PageHeaderTitle } from './styles'

type Props = {
  title: string
  description: string
  breadcrumbItems: BreadcrumbType[]
}

const PageHeader = ({ title, description, breadcrumbItems }: Props) => {
  return (
    <PageHeaderContainer>
      <SafeArea>
        <Breadcrumb items={breadcrumbItems} />
        <PageHeaderTitle>{title}</PageHeaderTitle>
        <PageHeaderDescription>{description}</PageHeaderDescription>
      </SafeArea>
    </PageHeaderContainer>
  )
}

export default PageHeader

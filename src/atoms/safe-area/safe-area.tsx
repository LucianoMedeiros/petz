import { ReactNode } from 'react'
import { SafeAreaContainer } from './styles'

type Props = {
  children: ReactNode | ReactNode[]
}

const SafeArea = ({ children }: Props) => {
  return <SafeAreaContainer className='safe-area'>{children}</SafeAreaContainer>
}

export default SafeArea

import { RequiredMessageContainer } from './styles'

type Props = {
  children: string
}

const RequiredMessage = ({ children }: Props) => {
  return <RequiredMessageContainer>{children}</RequiredMessageContainer>
}

export default RequiredMessage

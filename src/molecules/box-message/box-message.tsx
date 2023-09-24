import Button from '@/atoms/button/button'
import classNames from 'classnames'
import Image from 'next/image'
import { BoxMessageContainer, BoxMessageDescription, BoxMessageErrorList, BoxMessageErrorListItem, BoxMessageTitle } from './styles'

type Props = {
  title: string
  type: 'error' | 'success'
  successMessage?: string
  errorMessage?: string[]
  button: ActionButtonType
}

export type ActionButtonType = {
  text: string
  action: () => void
}
const BoxMessage = ({ title, type, errorMessage = [], successMessage, button }: Props) => {
  return (
    <BoxMessageContainer className={classNames({ error: type === 'error' })}>
      <BoxMessageTitle>{title}</BoxMessageTitle>
      {type === 'success' ? (
        <>
          <Image src='/check.svg' alt='Success Icon' width={42} height={42} />
          <BoxMessageDescription>{successMessage}</BoxMessageDescription>
        </>
      ) : (
        <>
          <Image src='/warning.svg' alt='Warning Icon' width={42} height={42} />
          <BoxMessageErrorList>
            {errorMessage.map((item, index) => (
              <BoxMessageErrorListItem key={index}>{item}</BoxMessageErrorListItem>
            ))}
          </BoxMessageErrorList>
        </>
      )}
      <Button onClick={() => button.action()}>{button.text}</Button>
    </BoxMessageContainer>
  )
}

export default BoxMessage

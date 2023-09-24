import { ChangeEvent } from 'react'
import RequiredMessage from '../required-message/required-message'
import { InputTextContainer, InputTextField, InputTextLabel } from './styles'

type Props = {
  [key: string]: any
  name: string
  label: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  value: any
  required?: boolean
  showErrorMessage?: boolean
  requiredMessage?: string
}

const InputText = ({ name, label, onChange, value, required, showErrorMessage = false, requiredMessage, ...rest }: Props) => {
  return (
    <InputTextContainer>
      <InputTextLabel htmlFor={name}>
        {label} {required && '*'}
      </InputTextLabel>
      <InputTextField id={name} name={name} onChange={onChange} value={value} required {...rest} />
      {showErrorMessage && <RequiredMessage>{requiredMessage || `O Campo ${label} é de preenchimento obrigatório.`}</RequiredMessage>}
    </InputTextContainer>
  )
}

export default InputText

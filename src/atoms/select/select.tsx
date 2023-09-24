import { SelectData } from '@/model/select-model'
import classNames from 'classnames'
import { ChangeEvent, RefObject, useRef, useState } from 'react'
import RequiredMessage from '../required-message/required-message'
import { Option, SelectContainer, SelectField, SelectLabel, SelectTextFieldContainer } from './styles'

type Props = {
  [key: string]: any
  name: string
  label: string
  data: SelectData[]
  value: string
  placeholder: string
  required?: boolean
  showErrorMessage?: boolean
  requiredMessage?: string
  layoutInline?: boolean
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

export const emptyItem: SelectData = {
  name: '',
  value: '',
}

const Select = ({
  name,
  label,
  value,
  data,
  required,
  placeholder = 'Selecione um valor',
  showErrorMessage = false,
  requiredMessage,
  layoutInline = false,
  onChange,
  ...rest
}: Props) => {
  const selectRef: RefObject<HTMLSelectElement> = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleSelectOpen = () => {
    setIsOpen(true)
  }

  const handleSelectClose = () => {
    setIsOpen(false)
  }

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e)
    setTimeout(() => {
      setIsOpen(false)
    }, 500)
  }

  return (
    <SelectContainer className={classNames({ inline: layoutInline })}>
      <SelectLabel htmlFor={name}>
        {label} {required && '*'}
      </SelectLabel>

      <SelectTextFieldContainer className={classNames({ open: isOpen })}>
        <SelectField
          ref={selectRef}
          onClick={handleSelectOpen}
          onBlur={handleSelectClose}
          onFocus={handleSelectOpen}
          onChange={(e) => handleChange(e)}
          name={name}
          required={required}
          value={value}
          {...rest}
        >
          <Option value=''>{placeholder}</Option>
          {data.map((item) => (
            <Option key={item.name} value={item.value}>
              {item.name}
            </Option>
          ))}
        </SelectField>
      </SelectTextFieldContainer>

      {showErrorMessage && <RequiredMessage>{requiredMessage || `O Campo ${label} é de preenchimento obrigatório.`}</RequiredMessage>}
    </SelectContainer>
  )
}

export default Select

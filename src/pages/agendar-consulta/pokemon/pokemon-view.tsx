import Select from '@/atoms/select/select'
import { SelectData } from '@/model/select-model'
import { ChangeEvent, useEffect, useState } from 'react'
import { PokemonViewModel } from './pokemon-view-model'

type Props = {
  [key: string]: any
  name?: string
  label?: string
  value: any
  placeholder: string
  required?: boolean
  showErrorMessage?: boolean
  requiredMessage?: string
  layoutInline?: boolean
  index: number
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

const PokemonView = ({ name, label, value, placeholder = 'Selecione um valor', layoutInline = false, index, onChange, ...rest }: Props) => {
  const [items, setItems] = useState<SelectData[]>([])
  const viewModel = new PokemonViewModel()

  useEffect(() => {
    viewModel
      .getList()
      .then((data) => {
        setItems(data)
      })
      .catch((error) => {
        console.error('Erro ao buscar itens:', error)
      })
  }, [])

  return (
    <Select
      name={name === undefined || name === '' ? 'pokemon' : name}
      label={label || 'Pokémon'}
      data={items}
      data-index={index}
      placeholder='Selecione seu pokémon'
      value={value}
      onChange={onChange}
      layoutInline={layoutInline}
      {...rest}
    />
  )
}

export default PokemonView

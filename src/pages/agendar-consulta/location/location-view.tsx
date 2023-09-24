import Select from '@/atoms/select/select'
import { SelectData } from '@/model/select-model'
import { ChangeEvent, useEffect, useState } from 'react'
import { LocationViewModel } from './location-view-model'

type Props = {
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
  value: string
}

const LocationView = ({ onChange, value }: Props) => {
  const [items, setItems] = useState<SelectData[]>([])

  useEffect(() => {
    const viewModel = new LocationViewModel()

    viewModel
      .getList()
      .then((data) => {
        setItems(data)
      })
      .catch((error) => {
        console.error('Erro ao buscar itens:', error)
      })
  }, [])
  return <Select name='location' label='Cidade' data={items} value={value} onChange={onChange} placeholder='Selecione sua cidade' />
}

export default LocationView

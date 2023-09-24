import Select from '@/atoms/select/select'
import { SelectData } from '@/model/select-model'
import { ChangeEvent, useEffect, useState } from 'react'
import { RegionViewModel } from './region-view-model'

type Props = {
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
  value: string
}

const RegionView = ({ onChange, value }: Props) => {
  const [items, setItems] = useState<SelectData[]>([])

  useEffect(() => {
    const viewModel = new RegionViewModel()

    viewModel
      .getList()
      .then((data) => {
        setItems(data)
      })
      .catch((error) => {
        console.error('Erro ao buscar itens:', error)
      })
  }, [])
  return <Select name='region' label='Região' data={items} value={value} onChange={onChange} placeholder='Selecione sua região' />
}

export default RegionView

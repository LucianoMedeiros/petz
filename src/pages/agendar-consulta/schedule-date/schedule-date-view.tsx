import Select from '@/atoms/select/select'
import { SelectData } from '@/model/select-model'
import { ChangeEvent, useEffect, useState } from 'react'
import { ScheduleDateViewModel } from './schedule-date-view-model'

type Props = {
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
  value: string
}

const ScheduleDateView = ({ onChange, value }: Props) => {
  const [items, setItems] = useState<SelectData[]>([])

  useEffect(() => {
    const viewModel = new ScheduleDateViewModel()

    viewModel
      .getList()
      .then((data) => {
        setItems(data)
      })
      .catch((error) => {
        console.error('Erro ao buscar itens:', error)
      })
  }, [])
  return <Select name='scheduleDate' label='Data para Atendimento' data={items} value={value} onChange={onChange} placeholder='Selecione uma data' />
}

export default ScheduleDateView

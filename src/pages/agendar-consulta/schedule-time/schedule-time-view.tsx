import Select from '@/atoms/select/select'
import { SelectData } from '@/model/select-model'
import { ChangeEvent, useEffect, useState } from 'react'
import { ScheduleTimeViewModel } from './schedule-time-view-model'

type Props = {
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
  value: string
}

const ScheduleTimeView = ({ onChange, value }: Props) => {
  const [items, setItems] = useState<SelectData[]>([])

  useEffect(() => {
    const viewModel = new ScheduleTimeViewModel()

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
    <Select name='scheduleTime' label='Horário para Atendimento' data={items} value={value} onChange={onChange} placeholder='Selecione um horário' />
  )
}

export default ScheduleTimeView

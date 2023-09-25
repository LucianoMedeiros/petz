import { SelectData } from '@/model/select-model'

export interface SchedulerInterface {
  firstName: string
  lastName: string
  region: string
  location: string
  pokemons: SelectData[]
  scheduleDate: string
  scheduleTime: string
}

export interface SchedulerInitialStateInterface {
  isLoading: boolean
  current: SchedulerInterface
  formState: 'initial' | 'success' | 'error'
  requestMessage: requestMessageType
}

type requestMessageType = {
  success: string
  error: string[]
}

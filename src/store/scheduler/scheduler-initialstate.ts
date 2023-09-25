import { emptyItem } from '../../atoms/select/select'
import { SchedulerInitialStateInterface } from './scheduler-interface'

export const schedulerInitialState: SchedulerInitialStateInterface = {
  isLoading: false,
  current: {
    firstName: '',
    lastName: '',
    region: '',
    location: '',
    pokemons: [emptyItem, emptyItem],
    scheduleDate: '',
    scheduleTime: '',
  },
  formState: 'initial',
  requestMessage: {
    success: '',
    error: [],
  },
}

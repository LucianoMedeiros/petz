import { SchedulerActions } from '@/store/scheduler/scheduler-reducer'
import { RootState, useAppDispatch, useAppSelector } from '@/store/store-config'
import { ChangeEvent } from 'react'

const useScheduleForm = () => {
  const dispatch = useAppDispatch()
  const current = useAppSelector((state: RootState) => state.scheduler.current)

  const handleChangeField = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    dispatch(SchedulerActions.setScheduleField({ [e.target.name]: e.target.value }))
  }

  return {
    current,
    handleChangeField,
  }
}

export default useScheduleForm

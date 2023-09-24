import BoxMessage from '@/molecules/box-message/box-message'
import { BreadcrumbType } from '@/molecules/breadcrumb/breadcrumb'
import PageHead from '@/organisms/page-head/page-head'
import PageHeader from '@/organisms/page-header/page-header'
import { pageRoutes } from '@/routes/page-routes'
import { SchedulerActions } from '@/store/scheduler/scheduler-reducer'
import { RootState, useAppDispatch, useAppSelector } from '@/store/store-config'
import MainTemplate from '@/templates/main/main'
import ScheduleForm from './schedule-form'

const SchedulePage = () => {
  const dispatch = useAppDispatch()

  const titlePage = 'Agendar Consulta'
  const descriptionPage = 'Aqui é o lugar onde você pode agenda uma consulta para seu pokémon.'

  const breadcrumb: BreadcrumbType[] = [
    { text: 'Home', url: pageRoutes.home },
    { text: titlePage, url: pageRoutes.aboutUs },
  ]

  const formState = useAppSelector((state: RootState) => state.scheduler.formState)
  const requestMessage = useAppSelector((state: RootState) => state.scheduler.requestMessage)

  const goToNewSchedule = () => {
    dispatch(SchedulerActions.resetState())
  }

  return (
    <MainTemplate>
      <PageHead title={titlePage} description={descriptionPage} />

      <PageHeader title={titlePage} description='Recupere seus pokémons em 5 segundos' breadcrumbItems={breadcrumb} />

      {formState === 'initial' && <ScheduleForm />}

      {formState === 'success' && (
        <BoxMessage
          title='Consulta Agendada'
          successMessage={requestMessage.success}
          type='success'
          button={{
            action: goToNewSchedule,
            text: 'Fazer Novo Agendamento',
          }}
        />
      )}

      {formState === 'error' && (
        <BoxMessage
          title='Houve um problema no agendamento'
          errorMessage={requestMessage.error}
          type='error'
          button={{
            action: goToNewSchedule,
            text: 'Fazer Novo Agendamento',
          }}
        />
      )}
    </MainTemplate>
  )
}

export default SchedulePage

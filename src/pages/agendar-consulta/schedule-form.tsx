import GridCol from '@/atoms/grid/grid-col'
import GridRow from '@/atoms/grid/grid-row'
import InputText from '@/atoms/input-text/input-text'
import ScheduleSummary from '@/organisms/schedule-summary/schedule-summary'
import LocationView from './location/location-view'
import PokemonList from './pokemon-list'
import RegionView from './region/region-view'
import ScheduleDateView from './schedule-date/schedule-date-view'
import useScheduleForm from './schedule-form-hook'
import ScheduleTimeView from './schedule-time/schedule-time-view'
import { ScheduleFormContainer, ScheduleFormTitle } from './styles'

const ScheduleForm = () => {
  const { current, handleChangeField } = useScheduleForm()

  return (
    <>
      <ScheduleFormTitle>Preencha o formulário abaixo para agendar sua consulta</ScheduleFormTitle>
      <ScheduleFormContainer>
        <GridRow>
          <GridCol span={6}>
            <InputText
              name='firstName'
              label='Nome'
              value={current.firstName}
              onChange={handleChangeField}
              placeholder='Digite seu nome'
              required
              showErrorMessage={false}
            />
          </GridCol>
          <GridCol span={6}>
            <InputText
              name='lastName'
              label='Sobrenome'
              value={current.lastName}
              onChange={handleChangeField}
              placeholder='Digite seu sobrenome'
              required
              showErrorMessage={false}
            />
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol span={6}>
            <RegionView onChange={handleChangeField} value={current.region} />
          </GridCol>
          <GridCol span={6}>
            <LocationView onChange={handleChangeField} value={current.location} />
          </GridCol>
        </GridRow>
        <PokemonList />
        <GridRow>
          <GridCol span={6}>
            <ScheduleDateView onChange={handleChangeField} value={current.scheduleDate} />
          </GridCol>
          <GridCol span={6}>
            <ScheduleTimeView onChange={handleChangeField} value={current.scheduleTime} />
          </GridCol>
        </GridRow>

        <ScheduleSummary maxGeneration={1} />
      </ScheduleFormContainer>
    </>
  )
}

export default ScheduleForm

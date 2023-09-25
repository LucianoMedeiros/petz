import { calculateTax } from '../../utils/calculate-tax'
import { SchedulerActions } from '../../store/scheduler/scheduler-reducer'
import { RootState, useAppDispatch, useAppSelector } from '../../store/store-config'
import { countValidItems } from '../../utils/count-valid-items'
import { formatTime } from '../../utils/format-time'
import { useEffect, useState } from 'react'

const useScheduleSummary = () => {
  const dispatch = useAppDispatch()

  const current = useAppSelector((state: RootState) => state.scheduler.current)
  const amountPokemons = useAppSelector((state: RootState) => countValidItems(state.scheduler.current.pokemons))

  const unityValue = 70

  const [subTotal, setSubTotal] = useState<number>(0)
  const [maxGeneration, setMaxGeneration] = useState<number>(0)
  const [taxGeneration, setTaxGeneration] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)

  const validateField = (field: string, fieldName: string) => {
    if (field === '') {
      dispatch(SchedulerActions.setErrorMessage(`O campos ${fieldName} é de preenchimento obrigatório.`))
      return false
    }
    return true
  }

  const validateAmountPokemons = () => {
    if (amountPokemons === 0) {
      dispatch(SchedulerActions.setErrorMessage('Você precisa selecionar um ou mais um pokémons.'))
      return false
    }
    return true
  }

  const handleSubmit = () => {
    const formIsValid = [
      validateAmountPokemons(),
      validateField(current.firstName, 'Nome'),
      validateField(current.lastName, 'Sobrenome'),
      validateField(current.region, 'Região'),
      validateField(current.location, 'Cidade'),
      validateField(current.scheduleDate, 'Data para Atendimento'),
      validateField(current.scheduleTime, 'Horário de Atendimento'),
    ].every((item) => item === true)

    if (formIsValid) {
      dispatch(
        SchedulerActions.setSuccessMessage(
          `Seu agendamento para dia ${current.scheduleDate}, 
          às ${formatTime(current.scheduleTime)}, para ${amountPokemons} 
          ${amountPokemons > 1 ? 'pokémons ' : 'pokémon '} 
          foi realizado com sucesso!`,
        ),
      )
      dispatch(SchedulerActions.setFormState('success'))
      return
    }
    dispatch(SchedulerActions.setFormState('error'))
  }

  useEffect(() => {
    const generations = current.pokemons.map((item) => item.generation || 0)
    setMaxGeneration(Math.max(...generations))
  }, [current.pokemons])

  useEffect(() => {
    setSubTotal(unityValue * amountPokemons)
  }, [amountPokemons])

  useEffect(() => {
    setTaxGeneration(calculateTax(maxGeneration, subTotal))
  }, [maxGeneration, subTotal])

  useEffect(() => {
    setTotal(taxGeneration + subTotal)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [taxGeneration + subTotal])

  return {
    amountPokemons,
    subTotal,
    taxGeneration,
    total,
    unityValue,
    handleSubmit,
    maxGeneration,
  }
}

export default useScheduleSummary

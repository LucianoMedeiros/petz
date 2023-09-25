import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../store/store-config'
import { calculateTax } from '../../utils/calculate-tax'
import ScheduleSummary from './schedule-summary'

test('Calcular se o valor total está zerado quando não temos pokémons selecionados', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <ScheduleSummary />
    </Provider>,
  )
  const summaryComponent = getByTestId('summary-total')
  expect(summaryComponent.textContent).toEqual('Valor Total: R$ 0,00')
})

test('Calcular se o valor da taxa', () => {
  const unity = 70
  const tax = 0.03
  const limitTax = tax * 10

  let maxGeneration = 1
  let pokemons = 1
  let subTotal = unity * pokemons
  const total1 = calculateTax(maxGeneration, subTotal)
  expect(total1).toEqual(2.1)

  maxGeneration = 20
  pokemons = 3
  subTotal = unity * pokemons
  const total2 = calculateTax(maxGeneration, subTotal)
  expect(total2).toEqual(limitTax * subTotal)
})

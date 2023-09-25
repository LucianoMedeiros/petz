import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../store/store-config'
import Logo from './logo'
import { pageRoutes } from '../../routes/page-routes'

test('Verificar se o logo possui a classe que vai fazer collapsar em 5 segundos', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Logo currentPage={pageRoutes.home} />
    </Provider>,
  )

  const logoComponent = getByTestId('logo-component')

  expect(logoComponent.className).toContain('collapse')
})

test('Verificar se o logo possui seu comportamento normal', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Logo currentPage={pageRoutes.aboutUs} />
    </Provider>,
  )

  const logoComponent = getByTestId('logo-component')

  expect(logoComponent.className).not.toContain('collapse')
})

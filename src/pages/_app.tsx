import store from '@/store/store-config'
import GlobalStyles from '@/styles/global-styles'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <>
        <GlobalStyles />
        <Component {...pageProps} />
      </>
    </Provider>
  )
}

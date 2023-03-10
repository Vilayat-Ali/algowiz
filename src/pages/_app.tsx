// global styles
import '@/styles/globals.css';

// Chakra UI
import { ChakraProvider } from '@chakra-ui/react';

// redux
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

// types
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
    </>
  )
}

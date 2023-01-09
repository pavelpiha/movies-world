import React from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { wrapper } from '../redux/store';

import '../public/index.scss';
import '../public/App.scss';

export default function App({ Component, ...rest }: AppProps): JSX.Element {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <React.StrictMode>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="assets/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Web site created using create-react-app" />
        </Head>
        <Component {...pageProps} />
      </React.StrictMode>
    </Provider>
  );
}

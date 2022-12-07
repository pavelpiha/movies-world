import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import App from './App';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const appElement = <App />;
const main = React.createElement('div', { className: 'mainContainer' }, appElement);

root.render(
  <Provider store={store}>
    <React.StrictMode>{main}</React.StrictMode>
  </Provider>
);

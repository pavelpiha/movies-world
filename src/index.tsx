import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import ErrorPage from './components/ErrorPage/ErrorPage';
import { store } from './redux/store';
import App from './App';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const appElement = <App />;
const main = React.createElement('div', { className: 'mainContainer' }, appElement);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/search" />
          </Route>
          <Route path={['/search/:searchValue', '/search', '/search/']}>{main}</Route>
          <Route path="*" component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const appElement = <App />;
const main = React.createElement('div', { className: 'mainContainer' }, appElement);

root.render(<React.StrictMode>{main}</React.StrictMode>);

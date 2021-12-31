import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './presentation/styles/global'
import { RoutesComponent } from './presentation/routes';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <RoutesComponent />
  </React.StrictMode>,
  document.getElementById('root')
);
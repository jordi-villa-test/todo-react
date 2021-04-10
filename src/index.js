import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'src/state/store';
import { Root } from './view/pages';
import { GlobalStyle } from './view/styles';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Root />
  </Provider>,
  document.getElementById('root')
);

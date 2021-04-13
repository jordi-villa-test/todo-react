import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import store from 'src/state/store';
import { Provider } from 'src/state/react-redux';
import { Root } from './view/pages';
import { GlobalStyle } from './view/styles';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Root />
  </Provider>,
  document.getElementById('root')
);

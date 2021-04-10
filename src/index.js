import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '~/state/store';

ReactDOM.render(
  <Provider store={store}>
    <div>Hello World</div>
  </Provider>,
  document.getElementById('root')
);

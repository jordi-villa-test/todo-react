import { createStore } from 'redux';
import todos from './todos';

const store = createStore(todos);

export default store;

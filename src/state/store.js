import { createStore } from 'redux';
import { loadState, saveState } from './utils/localStorage';
import todos from './todos';

const localStorageState = loadState();

const store = createStore(todos, localStorageState);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;

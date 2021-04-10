import * as types from './types';

export const initialState = {
  todos: []
};

const functions = {
  [types.INSERT_TODO]: addTodo
};

function addTodo(state) {
  return {
    ...state
  };
}

export default function (state = initialState, { type, payload }) {
  if (functions[type]) {
    return functions[type](state, payload);
  }
  return state;
}

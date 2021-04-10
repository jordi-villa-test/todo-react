import * as types from './types';

export const initialState = {
  todos: [
    {
      id: '1234',
      title: 'uncompleted task',
      isCompleted: false
    },
    {
      id: '1235',
      title: 'completed task',
      isCompleted: true
    }
  ]
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

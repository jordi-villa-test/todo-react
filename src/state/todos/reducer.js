import uuid4 from 'uuid4';
import * as types from './types';

export const initialState = {
  todos: []
};

const functions = {
  [types.INSERT_TODO]: addTodo
};

function addTodo(state, { title }) {
  const todo = {
    id: uuid4(),
    title,
    isCompleted: false
  };
  const todos = [...state.todos, todo];

  return {
    ...state,
    todos
  };
}

export default function (state = initialState, { type, payload }) {
  if (functions[type]) {
    return functions[type](state, payload);
  }
  return state;
}

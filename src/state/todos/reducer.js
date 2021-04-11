import uuid4 from 'uuid4';
import * as types from './types';

export const initialState = {
  todos: []
};

const functions = {
  [types.INSERT_TODO]: addTodo,
  [types.EDIT_TODO]: editTodo,
  [types.REMOVE_TODO]: removeTodo,
  [types.COMPLETE_TODO]: completeTodo
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

function editTodo(state, { title, id }) {
  const todos = [...state.todos].map((todo) =>
    todo.id === id ? { ...todo, title } : todo
  );

  return {
    ...state,
    todos
  };
}

function removeTodo(state, { id }) {
  const todos = [...state.todos].filter((todo) => todo.id !== id);

  return {
    ...state,
    todos
  };
}

function completeTodo(state, { id }) {
  const todos = [...state.todos].map((todo) =>
    todo.id === id ? { ...todo, isCompleted: true } : todo
  );

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

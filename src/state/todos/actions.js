import * as types from './types';

export function addTodo({ title }) {
  return {
    type: types.INSERT_TODO,
    payload: { title }
  };
}

export function editTodo({ id }) {
  const title = window.prompt('Please enter a new value');
  return {
    type: types.EDIT_TODO,
    payload: { title, id }
  };
}

export function removeTodo({ id }) {
  return {
    type: types.REMOVE_TODO,
    payload: { id }
  };
}

export function completeTodo({ id }) {
  return {
    type: types.COMPLETE_TODO,
    payload: { id }
  };
}

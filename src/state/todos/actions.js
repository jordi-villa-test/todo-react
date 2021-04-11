import * as types from './types';

export function addTodo({ title }) {
  return {
    type: types.INSERT_TODO,
    payload: { title }
  };
}

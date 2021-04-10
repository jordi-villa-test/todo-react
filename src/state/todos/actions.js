import * as types from './types';

export function addTodo(description) {
  return {
    type: types.INSERT_TODO,
    payload: { description }
  };
}

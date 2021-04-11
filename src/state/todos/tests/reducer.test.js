import reducer from '../reducer';
import { COMPLETE_TODO, EDIT_TODO, INSERT_TODO, REMOVE_TODO } from '../types';

const todoMock = {
  title: 'title',
  isCompleted: false
};

const initialStateMock = {
  todos: [
    { ...todoMock, id: '12345' },
    { ...todoMock, id: '123456' }
  ]
};

const executeReducerFunction = (type, payload) => {
  return reducer(initialStateMock, { type, payload });
};

describe('Test reducer functions', () => {
  describe('INSERT_TODO type', () => {
    it('adds a new todo to the state', () => {
      const titleMock = 'newRandomTitle';
      const state = executeReducerFunction(INSERT_TODO, {
        title: titleMock
      });
      expect(state.todos).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            title: titleMock
          })
        ])
      );
    });
  });

  describe('EDIT_TODO type', () => {
    it('edits a todo title in the state by id', () => {
      const idMock = initialStateMock.todos[0].id;
      const titleMock = 'newRandomTitle';
      const state = executeReducerFunction(EDIT_TODO, {
        title: titleMock,
        id: idMock
      });
      expect(state.todos).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: idMock,
            title: titleMock
          })
        ])
      );
    });
  });

  describe('REMOVE_TODO type', () => {
    it('removes a todo by id from the state', () => {
      const idMock = initialStateMock.todos[0].id;
      const state = executeReducerFunction(REMOVE_TODO, {
        id: idMock
      });
      expect(state.todos).toEqual(
        expect.arrayContaining([
          expect.not.objectContaining({
            id: idMock
          })
        ])
      );
    });
  });

  describe('COMPLETE_TODO type', () => {
    it('sets a todo isCompleted to true by id', () => {
      const idMock = initialStateMock.todos[0].id;
      const state = executeReducerFunction(COMPLETE_TODO, {
        id: idMock
      });
      expect(state.todos).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: idMock,
            isCompleted: true
          })
        ])
      );
    });
  });
});

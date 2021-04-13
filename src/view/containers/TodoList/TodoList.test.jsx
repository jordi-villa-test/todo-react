import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import * as redux from 'react-redux';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';

import { TEST_IDS } from './constants';
import TodoList from './TodoList';
import store from 'src/state/store';
import { EDIT_TODO, COMPLETE_TODO, REMOVE_TODO } from 'src/state/todos';

const renderComponent = (reduxStore = store) =>
  render(
    <Provider store={reduxStore}>
      <TodoList />
    </Provider>
  );

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn()
}));

describe('Container - TodoList', () => {
  window.prompt = jest.fn();
  const spy = jest.spyOn(redux, 'useSelector');
  const mockTodo = {
    title: 'test',
    id: '12345',
    isCompleted: false
  };
  afterEach(() => {
    cleanup();
  });

  describe('rendering', () => {
    it('renders the container', () => {
      renderComponent();
      const wrapper = screen.getByTestId(TEST_IDS.wrapper);
      expect(wrapper).toBeInTheDocument();
    });

    it('renders x number of todos inside the wrapper based on state data', async () => {
      const mockEntries = [mockTodo, { ...mockTodo, id: 123456 }];
      spy.mockReturnValue(mockEntries);
      renderComponent();

      const todos = await screen.findAllByTestId(TEST_IDS.todo);
      expect(todos).toHaveLength(mockEntries.length);
    });

    it('renders a placeholder text if no todo is found', async () => {
      const mockEntries = [];
      spy.mockReturnValue(mockEntries);
      renderComponent();

      const text = await screen.getByTestId(TEST_IDS.text);
      expect(text).toBeInTheDocument();
    });
  });

  describe('test dispatches', () => {
    const mockTodo = {
      title: 'test',
      id: '12345',
      isCompleted: false
    };
    const mockDispatch = jest.fn();
    const useDispatchMock = useDispatch;
    useDispatchMock.mockImplementation(() => mockDispatch);

    beforeEach(async () => {
      const mockEntries = [mockTodo];
      spy.mockReturnValue(mockEntries);
      renderComponent();
      const todo = await screen.getByTestId(TEST_IDS.todo);
      fireEvent.mouseOver(todo);
    });

    it('dispatches edit action onclick of edit button', async () => {
      const edit = screen.getByTestId(TEST_IDS.btnEdit);
      expect(edit).toBeInTheDocument();

      fireEvent.click(edit);
      expect(mockDispatch).toHaveBeenCalledWith({
        type: EDIT_TODO,
        payload: { id: mockTodo.id }
      });
    });

    it('dispatches remove action onclick of remove button', async () => {
      const remove = screen.getByTestId(TEST_IDS.btnRemove);
      expect(remove).toBeInTheDocument();

      fireEvent.click(remove);
      expect(mockDispatch).toHaveBeenCalledWith({
        type: REMOVE_TODO,
        payload: { id: mockTodo.id }
      });
    });

    it('dispatches complete action onclick of check button', async () => {
      const check = screen.getByTestId(TEST_IDS.btnCheck);
      expect(check).toBeInTheDocument();

      fireEvent.click(check);
      expect(mockDispatch).toHaveBeenCalledWith({
        type: COMPLETE_TODO,
        payload: { id: mockTodo.id }
      });
    });
  });
});

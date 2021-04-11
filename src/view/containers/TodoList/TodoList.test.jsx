import React from 'react';
import { Provider, useDispatch, useSelector } from 'src/state/react-redux';

import { render, screen, fireEvent } from '@testing-library/react';

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

jest.mock('src/state/react-redux', () => ({
  ...jest.requireActual('src/state/react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

describe('Container - TodoList', () => {
  window.prompt = jest.fn();
  const mockTodo = {
    title: 'test',
    id: '12345',
    isCompleted: false
  };
  const mockEntries = [mockTodo, { ...mockTodo, id: 123456 }];

  beforeEach(() => {
    useSelector.mockImplementation(() => mockEntries);
  });

  describe('rendering', () => {
    it('renders the container', () => {
      renderComponent();
      const wrapper = screen.getByTestId(TEST_IDS.wrapper);
      expect(wrapper).toBeInTheDocument();
    });

    it('renders x number of todos inside the wrapper based on state data', async () => {
      renderComponent();

      const todos = await screen.findAllByTestId(TEST_IDS.todo);
      expect(todos).toHaveLength(mockEntries.length);
    });

    it('renders a placeholder text if no todo is found', async () => {
      const emptyMockEntries = [];
      useSelector.mockImplementation(() => emptyMockEntries);
      renderComponent();

      const text = await screen.getByTestId(TEST_IDS.text);
      expect(text).toBeInTheDocument();
    });
  });

  describe('test dispatches', () => {
    const mockDispatch = jest.fn();
    const useDispatchMock = useDispatch;
    useDispatchMock.mockImplementation(() => mockDispatch);
    const mockSingleEntry = [mockTodo];

    beforeEach(async () => {
      useSelector.mockImplementation(() => mockSingleEntry);
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

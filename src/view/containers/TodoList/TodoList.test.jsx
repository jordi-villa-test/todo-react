import React from 'react';
import { Provider } from 'react-redux';
import * as redux from 'react-redux';
import { cleanup, render, screen } from '@testing-library/react';
import { TEST_IDS } from './constants';
import TodoList from './TodoList';
import store from 'src/state/store';

const renderComponent = (reduxStore = store) =>
  render(
    <Provider store={reduxStore}>
      <TodoList />
    </Provider>
  );

describe('Container - TodoList', () => {
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
      const todoEntry = {
        title: 'test',
        id: '12345',
        isCompleted: false
      };
      const mockEntries = [todoEntry, { ...todoEntry, id: 123456 }];
      const spy = jest.spyOn(redux, 'useSelector');
      spy.mockReturnValue(mockEntries);
      renderComponent();

      const todos = await screen.findAllByTestId(TEST_IDS.todo);
      expect(todos).toHaveLength(mockEntries.length);
    });
  });
});

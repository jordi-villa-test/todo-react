import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import Root from './Root';
import { TEST_IDS } from './constants';
import store from 'src/state/store';

const renderRootPage = (reduxStore = store) =>
  render(
    <Provider store={reduxStore}>
      <Root />
    </Provider>
  );

describe('Page - Root page', () => {
  beforeEach(() => {
    renderRootPage();
  });
  it('renders a layout wrapper', () => {
    const wrapper = screen.getByTestId(TEST_IDS.wrapper);
    expect(wrapper).toBeInTheDocument();
  });
  it('renders a header', () => {
    const wrapper = screen.getByTestId(TEST_IDS.wrapper);
    const header = screen.getByTestId(TEST_IDS.header);
    expect(wrapper).toContainElement(header);
  });
  it('renders the TodoList container', () => {
    const wrapper = screen.getByTestId(TEST_IDS.wrapper);
    const todoList = screen.getByTestId(TEST_IDS.list);
    expect(wrapper).toContainElement(todoList);
  });
  it('renders the TodoInput container', () => {
    const wrapper = screen.getByTestId(TEST_IDS.wrapper);
    const todoInput = screen.getByTestId(TEST_IDS.input);
    expect(wrapper).toContainElement(todoInput);
  });
});

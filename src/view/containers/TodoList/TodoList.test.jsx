import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { TEST_IDS } from './constants';
import TodoList from './TodoList';

const renderComponent = () => render(<TodoList />);

describe('Container - TodoList', () => {
  afterEach(() => {
    cleanup();
  });

  describe('rendering', () => {
    beforeEach(() => {
      renderComponent();
    });
    it('renders the container', () => {
      const wrapper = screen.getByTestId(TEST_IDS.wrapper);
      expect(wrapper).toBeInTheDocument();
    });
  });
});

import React from 'react';
import { cleanup, render, screen, within } from '@testing-library/react';
import { TEST_IDS, INPUT_PLACEHOLDER } from './constants';
import TodoInput from './TodoInput';

const renderComponent = () => render(<TodoInput />);

describe('Container - TodoInput', () => {
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

    it('renders the text input', () => {
      const wrapper = screen.getByTestId(TEST_IDS.wrapper);
      const input = screen.getByTestId(TEST_IDS.input);
      expect(wrapper).toContainElement(input);
    });

    it('renders the submit button', () => {
      const wrapper = screen.getByTestId(TEST_IDS.wrapper);
      const submit = screen.getByTestId(TEST_IDS.submit);
      expect(wrapper).toContainElement(submit);
    });

    it('text input shows the correct placeholder', () => {
      const wrapper = screen.getByTestId(TEST_IDS.wrapper);
      const { queryByPlaceholderText } = within(wrapper);

      const input = queryByPlaceholderText(INPUT_PLACEHOLDER);
      expect(input).toBeInTheDocument();
    });
  });
});

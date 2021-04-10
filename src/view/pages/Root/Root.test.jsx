import React from 'react';
import { render, screen } from '@testing-library/react';
import Root from './Root';
import { TEST_IDS } from './constants';

const renderRootPage = () => render(<Root />);

describe('Test Root page', () => {
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
  it('renders the TodoInput container', () => {
    const wrapper = screen.getByTestId(TEST_IDS.wrapper);
    const todoInput = screen.getByTestId(TEST_IDS.input);
    expect(wrapper).toContainElement(todoInput);
  });
});

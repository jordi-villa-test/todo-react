import React from 'react';
import { render, screen } from '@testing-library/react';
import { TEST_IDS } from './constants';
import TextField from './TextField';

const renderTextField = (props) => render(<TextField {...props} />);

describe('Container - ResultsList', () => {
  it('renders the component', () => {
    renderTextField();

    const wrapper = screen.getByTestId(TEST_IDS.WRAPPER);
    expect(wrapper).toBeInTheDocument();
  });

  it('renders a label if label prop is received', () => {
    const labelMock = 'label';
    renderTextField({ label: labelMock });

    const wrapper = screen.getByTestId(TEST_IDS.WRAPPER);
    const label = screen.getByTestId(TEST_IDS.LABEL);
    expect(wrapper).toContainElement(label);
    expect(label.textContent).toContain(labelMock);
  });
});

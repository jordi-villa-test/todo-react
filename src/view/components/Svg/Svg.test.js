import React from 'react';
import { render, screen } from '@testing-library/react';
import { TEST_IDS } from './constants';
import Svg from './Svg';
import { paths } from './paths';

const renderSvg = (props) => render(<Svg {...props} />);

describe('Component - SVG', () => {
  it('always renders the svg component', () => {
    renderSvg();

    const svg = screen.getByTestId(TEST_IDS.SVG);
    expect(svg).toBeInTheDocument();
  });

  it('does not render a path if the icon does not exist', () => {
    const iconPropMock = 'mock';
    renderSvg({ icon: iconPropMock });

    const svg = screen.getByTestId(TEST_IDS.SVG);
    const path = screen.queryByTestId(TEST_IDS.PATH);
    expect(svg).not.toContainElement(path);
  });

  it('renders a path if icon prop is received and the icon exists', () => {
    const iconPropMock = 'mock';
    const pathMock = 'hola';
    paths[iconPropMock] = pathMock;
    renderSvg({ icon: iconPropMock });

    const svg = screen.getByTestId(TEST_IDS.SVG);
    const path = screen.getByTestId(TEST_IDS.PATH);
    expect(svg).toContainElement(path);
    expect(svg.querySelector(`path[d="${pathMock}"`)).toBeInTheDocument();
  });
});

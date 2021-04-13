import React from 'react';
import PropTypes from 'prop-types';
import { TEST_IDS } from './constants';
import { paths } from './paths';
import { StyledSvg } from './styled';

function Svg({ icon, viewbox = '0 0 24 24', ...props }) {
  return (
    <StyledSvg data-testid={TEST_IDS.SVG} viewBox={viewbox} {...props}>
      {paths[icon] && <path d={paths[icon]} data-testid={TEST_IDS.PATH}></path>}
    </StyledSvg>
  );
}

Svg.propTypes = {
  icon: PropTypes.string,
  viewbox: PropTypes.string
};

export default Svg;

import React from 'react';
import PropTypes from 'prop-types';
import { TEST_IDS } from './constants';
import { Wrapper, Input, Label } from './styled';

function TextField({ label, name, ...props }) {
  const renderLabel = () => {
    return (
      label && (
        <Label data-testid={TEST_IDS.LABEL} htmlFor={name}>
          {label}
        </Label>
      )
    );
  };
  return (
    <Wrapper data-testid={TEST_IDS.WRAPPER}>
      {renderLabel()}
      <Input name={name} aria-label={label} id={name} {...props} />
    </Wrapper>
  );
}

TextField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string
};

export default TextField;

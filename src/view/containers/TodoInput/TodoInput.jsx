import React from 'react';
import TextField from 'src/view/components/TextField';
import Svg from 'src/view/components/Svg';
import { TEST_IDS, INPUT_NAME, INPUT_PLACEHOLDER } from './constants';
import { Wrapper, Submit } from './styled';

function TodoInput({ ...props }) {
  return (
    <Wrapper data-testid={TEST_IDS.wrapper} {...props}>
      <TextField
        data-testid={TEST_IDS.input}
        name={INPUT_NAME}
        placeholder={INPUT_PLACEHOLDER}
      />
      <Submit data-testid={TEST_IDS.submit}>
        <Svg icon="add" />
      </Submit>
    </Wrapper>
  );
}

export default TodoInput;

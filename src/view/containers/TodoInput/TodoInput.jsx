import React from 'react';
import TextField from 'src/view/components/TextField';
import Button from 'src/view/components/Button';
import { TEST_IDS, INPUT_NAME, INPUT_PLACEHOLDER } from './constants';
import { Wrapper } from './styled';

function TodoInput({ ...props }) {
  return (
    <Wrapper data-testid={TEST_IDS.wrapper} {...props}>
      <TextField
        data-testid={TEST_IDS.input}
        name={INPUT_NAME}
        placeholder={INPUT_PLACEHOLDER}
      />
      <Button data-testid={TEST_IDS.submit}>Add</Button>
    </Wrapper>
  );
}

export default TodoInput;

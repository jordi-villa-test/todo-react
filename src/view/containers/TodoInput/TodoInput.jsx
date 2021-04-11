import React from 'react';
import { useDispatch } from 'src/state/react-redux';

import { TEST_IDS, INPUT_NAME, INPUT_PLACEHOLDER } from './constants';
import { Wrapper, Submit } from './styled';
import { addTodo } from 'src/state/todos';
import TextField from 'src/view/components/TextField';
import Svg from 'src/view/components/Svg';

function TodoInput({ ...props }) {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.elements[INPUT_NAME].value;

    if (e.target.elements[INPUT_NAME].value) {
      dispatch(addTodo({ title }));
    }
  };
  return (
    <Wrapper data-testid={TEST_IDS.form} onSubmit={handleSubmit} {...props}>
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

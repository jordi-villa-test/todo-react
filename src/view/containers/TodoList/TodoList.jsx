import React from 'react';
import { TEST_IDS } from './constants';

function TodoList({ ...props }) {
  return <div data-testid={TEST_IDS.wrapper} {...props}></div>;
}

export default TodoList;

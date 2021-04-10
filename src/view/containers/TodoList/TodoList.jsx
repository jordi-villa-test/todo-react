import React from 'react';
import { useSelector } from 'react-redux';
import { TEST_IDS } from './constants';
import { Wrapper } from './styled';
import Todo from 'src/view/components/Todo';
import { selectTodos } from 'src/state/todos';

function TodoList({ ...props }) {
  const todos = useSelector(selectTodos);
  return (
    <Wrapper data-testid={TEST_IDS.wrapper} {...props}>
      {todos &&
        todos.map((todo) => (
          <Todo
            data-testid={TEST_IDS.todo}
            key={todo.id}
            title={todo.title}
            isCompleted={todo.isCompleted}
          />
        ))}
    </Wrapper>
  );
}

export default TodoList;

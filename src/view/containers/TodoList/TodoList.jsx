import React from 'react';
import { useSelector } from 'react-redux';
import { TEST_IDS } from './constants';
import { EmptyText, Wrapper, Content } from './styled';
import Todo from 'src/view/components/Todo';
import { selectTodos } from 'src/state/todos';

function TodoList({ ...props }) {
  const todos = useSelector(selectTodos);
  return (
    <Wrapper data-testid={TEST_IDS.wrapper} {...props}>
      <Content>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <Todo
              data-testid={TEST_IDS.todo}
              key={todo.id}
              title={todo.title}
              isCompleted={todo.isCompleted}
            />
          ))
        ) : (
          <EmptyText data-testid={TEST_IDS.text}>
            Start adding todos now
          </EmptyText>
        )}
      </Content>
    </Wrapper>
  );
}

export default TodoList;

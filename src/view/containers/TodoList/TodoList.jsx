import React from 'react';
import { useSelector, useDispatch } from 'src/state/react-redux';

import { TEST_IDS } from './constants';
import { EmptyText, Wrapper, Content } from './styled';
import Todo from 'src/view/components/Todo';
import {
  selectTodos,
  editTodo,
  removeTodo,
  completeTodo
} from 'src/state/todos';

function TodoList({ ...props }) {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const handleEdit = (id) => {
    dispatch(editTodo({ id }));
  };

  const handleRemove = (id) => {
    dispatch(removeTodo({ id }));
  };

  const handleComplete = (id) => {
    dispatch(completeTodo({ id }));
  };

  return (
    <Wrapper data-testid={TEST_IDS.wrapper} {...props}>
      <Content>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <Todo
              as="li"
              data-testid={TEST_IDS.todo}
              key={todo.id}
              id={todo.id + ''}
              title={todo.title}
              isCompleted={todo.isCompleted}
              handleEdit={handleEdit}
              handleRemove={handleRemove}
              handleComplete={handleComplete}
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

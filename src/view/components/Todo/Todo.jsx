import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TEST_IDS } from './constants';
import {
  Wrapper,
  Title,
  CompletedTitle,
  Check,
  CompletedCheck,
  Controls,
  RemoveButton,
  EditButton
} from './styled';
import Svg from '../Svg/Svg';

function Todo({
  id,
  title,
  isCompleted,
  handleComplete,
  handleEdit,
  handleRemove,
  ...props
}) {
  const [areControlsShown, setAreControlsShown] = useState(false);
  const renderTodoContent = () => (
    <>
      <Check
        data-testid={TEST_IDS.checkbox}
        onClick={() => handleComplete(id)}
      />
      <Title data-testid={TEST_IDS.title}>{title}</Title>
    </>
  );

  const renderCompletedTodoContent = () => (
    <>
      <CompletedCheck data-testid={TEST_IDS.checkboxCompleted} />
      <CompletedTitle data-testid={TEST_IDS.titleCompleted}>
        {title}
      </CompletedTitle>
    </>
  );

  const handleMouseEnter = () => {
    setAreControlsShown(true);
  };

  const handleMouseLeave = () => {
    setAreControlsShown(false);
  };

  const handleEditClick = (e, id) => {
    e.stopPropagation();
    handleEdit(id);
  };

  const handleRemoveClick = (e, id) => {
    e.stopPropagation();
    handleRemove(id);
  };

  return (
    <Wrapper
      tabIndex="1"
      data-testid={TEST_IDS.wrapper}
      onClick={() => handleComplete(id)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {isCompleted ? renderCompletedTodoContent() : renderTodoContent()}
      {areControlsShown && (
        <Controls>
          <EditButton
            data-testid={TEST_IDS.edit}
            onClick={(e) => handleEditClick(e, id)}
          >
            <Svg icon="edit" />
          </EditButton>
          <RemoveButton
            data-testid={TEST_IDS.remove}
            onClick={(e) => handleRemoveClick(e, id)}
          >
            <Svg icon="trash" />
          </RemoveButton>
        </Controls>
      )}
    </Wrapper>
  );
}

Todo.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  isCompleted: PropTypes.bool,
  handleComplete: PropTypes.func,
  handleEdit: PropTypes.func,
  handleRemove: PropTypes.func
};

export default Todo;

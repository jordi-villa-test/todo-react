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
  title,
  isCompleted,
  handleCheckClick,
  handleCompletedCheckClick,
  handleEditClick,
  handleRemoveClick,
  ...props
}) {
  const [areControlsShown, setAreControlsShown] = useState(false);
  const renderTodoContent = () => (
    <>
      <Check data-testid={TEST_IDS.checkbox} onClick={handleCheckClick} />
      <Title data-testid={TEST_IDS.title}>{title}</Title>
    </>
  );

  const renderCompletedTodoContent = () => (
    <>
      <CompletedCheck
        data-testid={TEST_IDS.checkboxCompleted}
        onClick={handleCompletedCheckClick}
      />
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

  return (
    <Wrapper
      data-testid={TEST_IDS.wrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {isCompleted ? renderCompletedTodoContent() : renderTodoContent()}
      {areControlsShown && (
        <Controls>
          <EditButton data-testid={TEST_IDS.edit} onClick={handleEditClick}>
            <Svg icon="edit" />
          </EditButton>
          <RemoveButton
            data-testid={TEST_IDS.remove}
            onClick={handleRemoveClick}
          >
            <Svg icon="trash" />
          </RemoveButton>
        </Controls>
      )}
    </Wrapper>
  );
}

Todo.propTypes = {
  title: PropTypes.string,
  isCompleted: PropTypes.bool,
  handleCheckClick: PropTypes.func,
  handleCompletedCheckClick: PropTypes.func,
  handleEditClick: PropTypes.func,
  handleRemoveClick: PropTypes.func
};

export default Todo;

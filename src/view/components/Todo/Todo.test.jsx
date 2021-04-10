import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { TEST_IDS } from './constants';
import Todo from './Todo';

const renderComponent = (props) => render(<Todo {...props} />);

describe('Component - Todo', () => {
  const titleMock = 'title';

  it('renders the container', () => {
    renderComponent();
    const wrapper = screen.getByTestId(TEST_IDS.wrapper);
    expect(wrapper).toBeInTheDocument();
  });

  describe('rendering when isCompleted is not defined', () => {
    beforeEach(() => {
      renderComponent({ title: titleMock });
    });
    it('renders a checkbox', () => {
      const wrapper = screen.getByTestId(TEST_IDS.wrapper);
      const check = screen.getByTestId(TEST_IDS.checkbox);
      expect(wrapper).toContainElement(check);
    });
    it('renders a title', () => {
      const wrapper = screen.getByTestId(TEST_IDS.wrapper);
      const text = screen.getByTestId(TEST_IDS.title);
      expect(wrapper).toContainElement(text);
    });

    it('renders the title based on the prop title', () => {
      const title = screen.getByTestId(TEST_IDS.title);
      const { getByText } = within(title);

      expect(getByText(titleMock)).toBeInTheDocument();
    });
  });

  describe('rendering when isCompleted is true', () => {
    beforeEach(() => {
      renderComponent({ title: titleMock, isCompleted: true });
    });
    it('renders a completed checkbox', () => {
      const wrapper = screen.getByTestId(TEST_IDS.wrapper);
      const check = screen.getByTestId(TEST_IDS.checkboxCompleted);
      expect(wrapper).toContainElement(check);
    });
    it('renders a completed title', () => {
      const wrapper = screen.getByTestId(TEST_IDS.wrapper);
      const text = screen.getByTestId(TEST_IDS.titleCompleted);
      expect(wrapper).toContainElement(text);
    });
    it('renders the title based on the prop title', () => {
      const title = screen.getByTestId(TEST_IDS.titleCompleted);
      const { getByText } = within(title);

      expect(getByText(titleMock)).toBeInTheDocument();
    });
  });

  describe('onHover functionalities', () => {
    beforeEach(() => {
      renderComponent({ title: titleMock, isCompleted: true });
    });
    it('renders an edit button', async () => {
      const wrapper = screen.getByTestId(TEST_IDS.wrapper);
      fireEvent.mouseEnter(wrapper);
      const edit = screen.getByTestId(TEST_IDS.edit);
      expect(edit).toBeInTheDocument();
    });
    it('renders a delete button', async () => {
      const wrapper = screen.getByTestId(TEST_IDS.wrapper);
      fireEvent.mouseEnter(wrapper);
      const remove = screen.getByTestId(TEST_IDS.remove);
      expect(remove).toBeInTheDocument();
    });
  });

  describe('Firing events', () => {
    const handleCheckClickFn = jest.fn();
    const handleCompletedCheckClickFn = jest.fn();
    const handleEditClickFn = jest.fn();
    const handleRemoveClickFn = jest.fn();

    it('fires handleCheckClick onClick of check element', () => {
      renderComponent({ handleCheckClick: handleCheckClickFn });
      const check = screen.getByTestId(TEST_IDS.checkbox);
      fireEvent.click(check);
      expect(handleCheckClickFn).toHaveBeenCalled();
    });

    it('fires handleCompletedCheckClick onClick of completed check element', () => {
      renderComponent({
        isCompleted: true,
        handleCompletedCheckClick: handleCompletedCheckClickFn
      });
      const check = screen.getByTestId(TEST_IDS.checkboxCompleted);
      fireEvent.click(check);
      expect(handleCompletedCheckClickFn).toHaveBeenCalled();
    });

    it('fires handleEditClick onClick of edit button', () => {
      renderComponent({ handleEditClick: handleEditClickFn });
      const wrapper = screen.getByTestId(TEST_IDS.wrapper);
      fireEvent.mouseEnter(wrapper);
      const edit = screen.getByTestId(TEST_IDS.edit);
      fireEvent.click(edit);
      expect(handleEditClickFn).toHaveBeenCalled();
    });
    it('fires handleRemoveClick onClick of remove button', () => {
      renderComponent({ handleRemoveClick: handleRemoveClickFn });
      const wrapper = screen.getByTestId(TEST_IDS.wrapper);
      fireEvent.mouseEnter(wrapper);
      const remove = screen.getByTestId(TEST_IDS.remove);
      fireEvent.click(remove);
      expect(handleRemoveClickFn).toHaveBeenCalled();
    });
  });
});

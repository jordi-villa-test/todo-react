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
    const handleCompleteFn = jest.fn();
    const handleEditFn = jest.fn();
    const handleRemoveFn = jest.fn();
    const idMock = '12345';

    it('fires handleComplete onClick of wrapper', () => {
      renderComponent({ handleComplete: handleCompleteFn, id: idMock });
      const wrapper = screen.getByTestId(TEST_IDS.wrapper);
      fireEvent.click(wrapper);
      expect(handleCompleteFn).toHaveBeenCalledWith(idMock);
    });
    it('fires handleComplete onClick of check element', () => {
      renderComponent({ handleComplete: handleCompleteFn, id: idMock });
      const check = screen.getByTestId(TEST_IDS.checkbox);
      fireEvent.click(check);
      expect(handleCompleteFn).toHaveBeenCalledWith(idMock);
    });
    it('fires handleEdit onClick of edit button', () => {
      renderComponent({ handleEdit: handleEditFn, id: idMock });
      const wrapper = screen.getByTestId(TEST_IDS.wrapper);
      fireEvent.mouseEnter(wrapper);
      const edit = screen.getByTestId(TEST_IDS.edit);
      fireEvent.click(edit);
      expect(handleEditFn).toHaveBeenCalledWith(idMock);
    });
    it('fires handleRemove onClick of remove button', () => {
      renderComponent({ handleRemove: handleRemoveFn, id: idMock });
      const wrapper = screen.getByTestId(TEST_IDS.wrapper);
      fireEvent.mouseEnter(wrapper);
      const remove = screen.getByTestId(TEST_IDS.remove);
      fireEvent.click(remove);
      expect(handleRemoveFn).toHaveBeenCalledWith(idMock);
    });
  });
});

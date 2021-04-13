import React from 'react';
import { Provider } from 'src/state/react-redux';
import {
  cleanup,
  fireEvent,
  render,
  screen,
  within
} from '@testing-library/react';
import { useDispatch } from 'src/state/react-redux';
import { TEST_IDS, INPUT_PLACEHOLDER } from './constants';
import TodoInput from './TodoInput';
import store from 'src/state/store';

jest.mock('src/state/react-redux', () => ({
  ...jest.requireActual('src/state/react-redux'),
  useDispatch: jest.fn()
}));

const renderComponent = (reduxStore = store) =>
  render(
    <Provider store={reduxStore}>
      <TodoInput />
    </Provider>
  );

describe('Container - TodoInput', () => {
  afterEach(() => {
    cleanup();
  });

  describe('rendering', () => {
    beforeEach(() => {
      renderComponent();
    });
    it('renders the container', () => {
      const form = screen.getByTestId(TEST_IDS.form);
      expect(form).toBeInTheDocument();
    });

    it('renders the text input', () => {
      const form = screen.getByTestId(TEST_IDS.form);
      const input = screen.getByTestId(TEST_IDS.input);
      expect(form).toContainElement(input);
    });

    it('renders the submit button', () => {
      const form = screen.getByTestId(TEST_IDS.form);
      const submit = screen.getByTestId(TEST_IDS.submit);
      expect(form).toContainElement(submit);
    });

    it('text input shows the correct placeholder', () => {
      const form = screen.getByTestId(TEST_IDS.form);
      const { queryByPlaceholderText } = within(form);

      const input = queryByPlaceholderText(INPUT_PLACEHOLDER);
      expect(input).toBeInTheDocument();
    });
  });

  describe('test submit', () => {
    const mockDispatch = jest.fn();
    const useDispatchMock = useDispatch;
    useDispatchMock.mockImplementation(() => mockDispatch);

    beforeEach(() => {
      renderComponent();
    });
    it('does not dispatch a redux action if the input is empty', async () => {
      const form = screen.getByTestId(TEST_IDS.form);
      const input = screen.getByTestId(TEST_IDS.input);
      expect(input.value).toContain('');
      fireEvent.submit(form);
      expect(mockDispatch).not.toHaveBeenCalled();
    });
    it('dispatches addTodo action when submitting the form if the input contains a value', () => {
      const form = screen.getByTestId(TEST_IDS.form);
      const input = screen.getByTestId(TEST_IDS.input);
      fireEvent.change(input, { target: { value: 'test' } });
      expect(input.value).toContain('test');
      fireEvent.submit(form);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});

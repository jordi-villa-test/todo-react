import { loadState, saveState, ITEM_NAME } from './localStorage';

describe('Test localStorage persisting utils', () => {
  const stateMock = {
    todos: [{ id: '1234 ' }]
  };
  const setItemSpy = jest.spyOn(
    Object.getPrototypeOf(window.localStorage),
    'setItem'
  );
  const getItemSpy = jest.spyOn(
    Object.getPrototypeOf(window.localStorage),
    'getItem'
  );

  describe('test loadState function', () => {
    it('returns the correct item from localstorage', () => {
      loadState();
      expect(getItemSpy).toBeCalledWith(ITEM_NAME);
    });
    it('returns the stored values from localStorage as js object', () => {
      localStorage.setItem(ITEM_NAME, JSON.stringify(stateMock));
      const loadedState = loadState();
      expect(loadedState).toMatchObject(stateMock);
    });
  });

  describe('test saveState function', () => {
    it('saves a given state to the store', () => {
      saveState(stateMock);
      expect(setItemSpy).toBeCalledWith(ITEM_NAME, expect.anything());
      const storedState = JSON.parse(localStorage.getItem(ITEM_NAME));
      expect(storedState).toMatchObject(stateMock);
    });
  });
});

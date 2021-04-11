import { INSERT_TODO } from './todos/types';
import store from './store';
import * as localStorageUtils from './utils/localStorage';

describe('test store', () => {
  const saveStateSpy = jest.spyOn(localStorageUtils, 'saveState');
  it('saves state in localStorage after a state change', async () => {
    store.dispatch({ type: INSERT_TODO, payload: { title: 'mock' } });
    expect(saveStateSpy).toHaveBeenCalled();
  });
});

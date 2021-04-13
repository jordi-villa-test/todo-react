import { useContext, useState } from 'react';
import ReduxContext from './Context';

const useSelector = (selectorFn) => {
  const store = useContext(ReduxContext);
  const [state, setState] = useState(store.getState());

  store.subscribe(() => setState(store.getState()));
  return selectorFn(state);
};

export default useSelector;

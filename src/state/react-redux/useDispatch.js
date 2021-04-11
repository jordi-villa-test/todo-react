import { useContext } from 'react';
import ReduxContext from './Context';

const useDispatch = function useDispatch() {
  const store = useContext(ReduxContext);
  return store.dispatch;
};

export default useDispatch;

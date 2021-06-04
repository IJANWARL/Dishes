import {
  TypedUseSelectorHook,
  useDispatch as useDispatchCreator,
  useSelector as useSelectorCreator
} from 'react-redux';

import IState from './models';
import { DispatchType } from './store';

export const useAppSelector: TypedUseSelectorHook<IState> = useSelectorCreator;
export const useAppDispatch = () => useDispatchCreator<DispatchType>();

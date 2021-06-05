import { IDishState } from './models';
import types from './types';

interface IAdddTListAction {
  type: types.ADD_TO_LIST;
  data: IDishState;
}

export const addToList = (data: IDishState): IAdddTListAction => ({
  type: types.ADD_TO_LIST,
  data
});

type Actions = IAdddTListAction;

export default Actions;

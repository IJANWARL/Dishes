import { IListElementState } from './models';
import types from './types';

interface IAdddTListAction {
  type: types.ADD_TO_LIST;
  data: IListElementState;
}

export const addToList = (data: IListElementState): IAdddTListAction => ({
  type: types.ADD_TO_LIST,
  data
});

type Actions = IAdddTListAction;

export default Actions;

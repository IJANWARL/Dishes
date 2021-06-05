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

interface IEditDish {
  type: types.EDIT_DISH;
  data: IDishState;
  idx: number;
}

export const editDish = (idx: number, data: IDishState): IEditDish => ({
  type: types.EDIT_DISH,
  data,
  idx
});

type Actions = IAdddTListAction | IEditDish;

export default Actions;

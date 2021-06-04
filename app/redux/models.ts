import { IListElementState } from 'containers/List/duck/models';

interface IState {
  list: IListElementState[];
  form?: any;
}

export const initialState: IState = {
  list: []
};

export default IState;

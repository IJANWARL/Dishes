import { IDishState } from 'containers/List/duck/models';

interface IState {
  list: IDishState[];
  form?: any;
}

export const initialState: IState = {
  list: []
};

export default IState;

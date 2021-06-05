import { produce } from 'immer';

import { IDishState } from './models';
import types from './types';
import Actions from './actions';

const productList = (state: IDishState[] = [], action: Actions) =>
  produce(state, draft => {
    switch (action.type) {
      case types.ADD_TO_LIST:
        return state.concat([action.data]);
      default:
        break;
    }
    return draft;
  });

export default productList;

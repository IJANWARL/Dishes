import { produce } from 'immer';

import { IListElementState } from './models';
import types from './types';
import Actions from './actions';

const productList = (state: IListElementState[] = [], action: Actions) =>
  produce(state, draft => {
    switch (action.type) {
      case types.ADD_TO_LIST:
        draft.concat([action.data]);
        break;
      default:
        break;
    }
    return draft;
  });

export default productList;

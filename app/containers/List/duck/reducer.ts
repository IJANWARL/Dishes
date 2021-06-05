import { produce } from 'immer';

import { IDishState } from './models';
import types from './types';
import Actions from './actions';

const dishesList = (state: IDishState[] = [], action: Actions) =>
  produce(state, draft => {
    switch (action.type) {
      case types.ADD_TO_LIST:
        return state.concat([action.data]);
      case types.EDIT_DISH:
        return state.map((el, elIdx) =>
          elIdx === action.idx ? action.data : el
        );
      default:
        break;
    }
    return draft;
  });

export default dishesList;

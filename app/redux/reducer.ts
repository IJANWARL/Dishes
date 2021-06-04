import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import list from 'containers/List/duck/reducer';

export default combineReducers({
  form,
  list
});

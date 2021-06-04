import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { initialState } from './models';
import reducer from './reducer';

const enhancer = IS_PRODUCTION_BUILD ? undefined : composeWithDevTools();

const store = createStore(reducer, initialState, enhancer);

export type DispatchType = typeof store.dispatch;

export default store;

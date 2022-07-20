import { combineReducers } from 'redux';

import cardsReducer from './cards';
import transactionsReducer from './transactions';
import filterReducer from './filters';

const rootReducer = combineReducers({
  cardsReducer,
  transactionsReducer,
  filterReducer,
});

export default rootReducer;

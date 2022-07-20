import { combineReducers } from 'redux';

import cardsReducer from './cards';
import transactionsReducer from './transactions';

const rootReducer = combineReducers({
  cardsReducer,
  transactionsReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';

import test from './test.reducer';
import auth from './auth.reducer';
import nav from './nav.reducer';
import counter from './counter.reducer';
import sport from './sport.reducer';

export default combineReducers({
  auth,
  // nav,
  counter,
  test,
  sport
});
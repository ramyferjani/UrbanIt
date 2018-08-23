import {combineReducers} from 'redux';

import test from './test.reducer';
import counter from './counter.reducer';

export default combineReducers({
  counter,
  test
});
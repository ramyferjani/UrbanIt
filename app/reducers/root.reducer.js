import { combineReducers } from 'redux';

import test from './test';
import auth from './auth';
import nav from './nav';
import counter from './counter';
import profile from './profile';
import sports from './sports';
import profiles from './profiles';
import createProfile from './createProfile';
import updateUser from './updateUser';
import searchMatch from './searchMatch';
import refreshProfile from './refreshProfile';
import fillScores from './fillScores';

export default combineReducers({
  auth,
  // nav,
  counter,
  test,
  profile,
  sports,
  profiles,
  createProfile,
  updateUser,
  searchMatch,
  refreshProfile,
  fillScores,
});

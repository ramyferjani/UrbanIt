import { combineReducers } from 'redux';

import auth from './auth';
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
  profile,
  sports,
  profiles,
  createProfile,
  updateUser,
  searchMatch,
  refreshProfile,
  fillScores,
});

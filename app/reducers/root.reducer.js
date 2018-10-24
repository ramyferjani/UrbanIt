import { combineReducers } from 'redux';

import test from './test.reducer';
import auth from './auth.reducer';
import nav from './nav.reducer';
import counter from './counter.reducer';
import profile from './profile';
import sports from './sports.reducer';
import profiles from './profiles.reducer';
import apiProfiles from './api_profiles.reducer';


export default combineReducers({
  auth,
  // nav,
  counter,
  test,
  profile,
  sports,
  profiles,
  apiProfiles
});
import axios from 'axios';
import querystring from 'querystring';

import * as Actions from '../constants/refreshProfile'
import { setProfiles } from './profiles';
import { changeProfile } from './profile';
import { removeAvailableSport } from './sports';

function refreshProfileBegin() {
  return {
    type: Actions.REFRESH_PROFILE_BEGIN,
  }
}

function refreshProfileSuccess(response) {
  return {
    type: Actions.REFRESH_PROFILE_SUCCESS,
    response
  }
}

function refreshProfileFailure(error) {
  return {
    type: Actions.REFRESH_PROFILE_FAILURE,
    error
  }
}

export function refreshProfile(profileId) {
  return (dispatch, getState) => {
    dispatch(refreshProfileBegin());
    return axios.get(`https://urbanit.herokuapp.com/profile/${profileId}`)
      .then(this.status)
      .then((res) => {
        /* eslint-disable no-console */
        console.log(res);
        let profiles = getState().profiles;
        profiles = profiles.filter(function(profile) {
          return profile.id != profileId;
        });
        profiles.push(res.data.data);
        dispatch(refreshProfileSuccess(res.data.data));
        dispatch(changeProfile(res.data.data));
        dispatch(setProfiles(profiles));
      })
      .catch((err) => {
        /* eslint-disable no-console */
        // console.log(err.response);
        console.log('before dispatch');
        dispatch(refreshProfileFailure(err.response ? err.response.data.data : null));
        console.log('after dispatch');
      });
  }
}
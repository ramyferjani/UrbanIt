import axios from 'axios';
import querystring from 'querystring';

import * as Actions from '../constants/createProfile'
import { addProfile } from './profiles';
import { removeAvailableSport } from './sports';

function createProfileBegin() {
  return {
    type: Actions.CREATE_PROFILE_BEGIN,
  }
}

function createProfileSuccess(response) {
  return {
    type: Actions.CREATE_PROFILE_SUCCESS,
    response
  }
}

function createProfileFailure(error) {
  return {
    type: Actions.CREATE_PROFILE_FAILURE,
    error
  }
}

export function createProfile(profile) {
  return (dispatch) => {
    dispatch(createProfileBegin());
    return axios.post('http://localhost:1344/profile', querystring.stringify(profile))
      .then(this.status)
      .then((res) => {
        /* eslint-disable no-console */
        console.log(res);
        delete (res.data.data.user);
        dispatch(createProfileSuccess(res.data.data));
        dispatch(addProfile(res.data.data));
        dispatch(removeAvailableSport(res.data.data.sport.sport));
        // this.$store.commit('loginSuccess', { token: res.data.token, user: res.data.user });
      })
      .catch((err) => {
        // if (!err.response) {
        //   dispatch(loginFailure( err.response.data.data ));
        // }
        /* eslint-disable no-console */
        // console.log(err.response);
        console.log('before dispatch');
        dispatch(createProfileFailure(err.response ? err.response.data.data : null));
        console.log('after dispatch');
        // this.$store.commit('loginFailure');
        // this.errors.push(err);
      });
  }
}
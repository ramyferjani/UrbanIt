import axios from 'axios';
import querystring from 'querystring';

import * as Actions from '../constants/updateUser';
import { updateUserInfo } from './auth';

function updateUserBegin() {
  return {
    type: Actions.UPDATE_USER_BEGIN,
  }
}

function updateUserSuccess(response) {
  return {
    type: Actions.UPDATE_USER_SUCCESS,
    response
  }
}

function updateUserFailure(error) {
  return {
    type: Actions.UPDATE_USER_FAILURE,
    error
  }
}

export function resetUpdateUserState() {
  return {
    type: Actions.RESET_UPDATE_USER_STATE,
  }
}

function status(response) {
  let promise;
  if (response.status >= 200 && response.status < 300) {
    promise = Promise.resolve(response);
  } else {
    promise = Promise.reject(new Error(response));
  }
  return (promise);
};

export function updateUser(user, userId) {
  return (dispatch) => {
    dispatch(updateUserBegin());
    return axios.put(`https://urbanit.herokuapp.com/user/${userId}`, querystring.stringify(user))
      .then(this.status)
      .then((res) => {
        /* eslint-disable no-console */
        console.log(res);
        dispatch(updateUserSuccess(res.data.data));
        dispatch(updateUserInfo(res.data.data));
      })
      .catch((err) => {
        /* eslint-disable no-console */
        // console.log(err.response);
        console.log('before dispatch');
        dispatch(updateUserFailure(err.response ? err.response.data.data : null));
        console.log('after dispatch');
      });
  }
}
import axios from 'axios';
import querystring from 'querystring';

import { LOGIN_BEGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, REGISTER_BEGIN, REGISTER_SUCCESS, REGISTER_FAILURE, UPDATE_USER } from '../lib/constants';

function loginBegin() {
  return {
    type: LOGIN_BEGIN,
  }
}

function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    user: data.user,
    token: 'jwt',
  }
}

function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error
  }
}

function registerBegin() {
  return {
    type: REGISTER_BEGIN,
  }
}

function registerSuccess(data) {
  return {
    type: REGISTER_SUCCESS,
    user: data.user,
    token: 'jwt',
  }
}

function registerFailure(error) {
  return {
    type: REGISTER_FAILURE,
    error
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

export function updateUserInfo(user) {
  return {
    type: UPDATE_USER,
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    description: user.description,
  }
}

export function login(email, password) {
  return (dispatch) => {
    dispatch(loginBegin());
    return axios.post('https://urbanit.herokuapp.com/user/signIn', querystring.stringify({
      email: email,
      password: password,
    }))
      .then(this.status)
      .then((res) => {
        /* eslint-disable no-console */
        console.log(res);
        dispatch(loginSuccess({ user: res.data.data }));
      })
      .catch((err) => {
        // console.log(err.response);
        console.log('before dispatch');
        dispatch(loginFailure( err.response ? err.response.data.data : null));
        console.log('after dispatch');
      });
  }
}

export function register(username, email, firstName, lastName, password) {
  return (dispatch) => {
    dispatch(registerBegin());
    return axios.post('https://urbanit.herokuapp.com/user', querystring.stringify({
      username,
      email,
      firstName,
      lastName,
      password,
      description: 'best player ever',
    }))
      .then(this.status)
      .then((res) => {
        /* eslint-disable no-console */
        console.log(res);
        dispatch(registerSuccess({ user: res.data.data }));
      })
      .catch((err) => {
        /* eslint-disable no-console */
        console.log(err);
        dispatch(registerFailure( err.response ? err.response.data.data : null));
      });
  }
}

export function logout() {
  return {
    type: LOGOUT,
  }
}
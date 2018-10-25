import axios from 'axios';
import querystring from 'querystring';

import * as Actions from '../constants/updateUser';
import { updateUserInfo } from './user_auth';

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
    return axios.put(`http://localhost:1344/user/${userId}`, querystring.stringify(user))
      .then(this.status)
      .then((res) => {
        /* eslint-disable no-console */
        console.log(res);
        dispatch(updateUserSuccess(res.data.data));
        dispatch(updateUserInfo(res.data.data));
        // this.$store.commit('loginSuccess', { token: res.data.token, user: res.data.user });
      })
      .catch((err) => {
        // if (!err.response) {
        //   dispatch(loginFailure( err.response.data.data ));
        // }
        /* eslint-disable no-console */
        // console.log(err.response);
        console.log('before dispatch');
        dispatch(updateUserFailure(err.response ? err.response.data.data : null));
        console.log('after dispatch');
        // this.$store.commit('loginFailure');
        // this.errors.push(err);
      });
  }
}

// export function getSports() {
//   return (dispatch) => {
//     return axios.get('http://localhost:1344/user/signIn')
//       .then(this.status)
//       .then((res) => {
//         /* eslint-disable no-console */
//         console.log(res);
//         dispatch(setSports(res.data.data));
//         // dispatch(loginSuccess({ user: res.data.data }));
//         // this.$store.commit('loginSuccess', { token: res.data.token, user: res.data.user });
//       })
//       .catch((err) => {
//         // if (!err.response) {
//         //   dispatch(loginFailure( err.response.data.data ));
//         // }
//         /* eslint-disable no-console */
//         // console.log(err.response);
//         console.log('before dispatch');
//         // dispatch(loginFailure( err.response ? err.response.data.data : null));
//         console.log('after dispatch');
//         // this.$store.commit('loginFailure');
//         // this.errors.push(err);
//       });
//   }
// }
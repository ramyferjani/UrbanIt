import axios from 'axios';
import querystring from 'querystring';

import * as Actions from '../constants/searchMatch';
import { changeProfile } from './profile';

function searchMatchBegin() {
  return {
    type: Actions.SEARCH_MATCH_BEGIN,
  }
}

function searchMatchSuccess(response) {
  return {
    type: Actions.SEARCH_MATCH_SUCCESS,
    response
  }
}

function searchMatchFailure(error) {
  return {
    type: Actions.SEARCH_MATCH_FAILURE,
    error
  }
}

export function resetSearchMatchState() {
  return {
    type: Actions.RESET_SEARCH_MATCH_STATE,
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

export function searchMatch(profileId) {
  return (dispatch) => {
    dispatch(searchMatchBegin());
    return axios.post(`https://urbanit.herokuapp.com/profile/jointeam`, querystring.stringify({
      idProfile: profileId,
    }))
      .then(this.status)
      .then((res) => {
        /* eslint-disable no-console */
        console.log(res);
        dispatch(searchMatchSuccess(res.data.data));
        dispatch(changeProfile(res.data.data));
        dispatch(resetSearchMatchState());
        // dispatch(searchMatchInfo(res.data.data));
        // this.$store.commit('loginSuccess', { token: res.data.token, user: res.data.user });
      })
      .catch((err) => {
        // if (!err.response) {
        //   dispatch(loginFailure( err.response.data.data ));
        // }
        /* eslint-disable no-console */
        // console.log(err.response);
        console.log('before dispatch');
        dispatch(searchMatchFailure(err.response ? err.response.data.data : null));
        console.log('after dispatch');
        // this.$store.commit('loginFailure');
        // this.errors.push(err);
      });
  }
}
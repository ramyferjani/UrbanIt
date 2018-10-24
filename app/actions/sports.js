import axios from 'axios';

// import { CHANGE_SPORT } from '../lib/constants';

import * as Actions from '../constants/sports';

// function setSports(sports) {
//   return {
//     type: CHANGE_SPORT,
//     sports
//   }
// }


export function setAvailableSports(sports) {
  return {
    type: Actions.SET_AVAILABLE_SPORTS,
    sports
  }
}

export function setUnavailableSports(sports) {
  return {
    type: Actions.SET_UNAVAILABLE_SPORTS,
    sports
  }
}

export function addAvailableSport(sport) {
  return {
    type: Actions.ADD_AVAILABLE_SPORT,
    sport
  }
}

export function removeAvailableSport(sport) {
  return {
    type: Actions.REMOVE_AVAILABLE_SPORT,
    sport
  }
}

export function addUnavailableSports(sport) {
  return {
    type: Actions.ADD_AVAILABLE_SPORT,
    sport
  }
}

export function removeUnavailableSports(sport) {
  return {
    type: Actions.REMOVE_UNAVAILABLE_SPORT,
    sport
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
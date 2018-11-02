import axios from 'axios';
import querystring from 'querystring';

import * as Actions from '../constants/fillScores';
import { refreshProfile } from '../actions/refreshProfile';
// import { addProfile } from './profiles';
// import { removeAvailableSport } from './sports';

function fillScoresBegin() {
  return {
    type: Actions.FILL_SCORES_BEGIN,
  }
}

function fillScoresSuccess(response) {
  return {
    type: Actions.FILL_SCORES_SUCCESS,
    response
  }
}

function fillScoresFailure(error) {
  return {
    type: Actions.FILL_SCORES_FAILURE,
    error
  }
}

export function fillScores(matchId, scores, teams, profileId) {
  return (dispatch) => {
    dispatch(fillScoresBegin());
    return axios.post(`https://urbanit.herokuapp.com/score/${matchId}`, querystring.stringify({
      idProfile: profileId,
      idsTeam: JSON.stringify(teams),
      scores: JSON.stringify(scores),
    }))
      .then(this.status)
      .then((res) => {
        /* eslint-disable no-console */
        console.log(res);
        // delete (res.data.data.user);
        dispatch(fillScoresSuccess(res.data.data));
        dispatch(refreshProfile(profileId));
        // dispatch(addProfile(res.data.data));
        // dispatch(removeAvailableSport(res.data.data.sport.sport));
        // this.$store.commit('loginSuccess', { token: res.data.token, user: res.data.user });
      })
      .catch((err) => {
        // if (!err.response) {
        //   dispatch(loginFailure( err.response.data.data ));
        // }
        /* eslint-disable no-console */
        // console.log(err.response);
        console.log('before dispatch');
        dispatch(fillScoresFailure(err.response ? err.response.data.data : null));
        console.log('after dispatch');
        // this.$store.commit('loginFailure');
        // this.errors.push(err);
      });
  }
}
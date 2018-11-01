import * as Actions from '../constants/refreshProfile';

const initialState = {
  error: null,
  loading: false,
  response: null,
}

const refreshProfile = (state = initialState, action) => {
  switch (action.type) {
    case Actions.REFRESH_PROFILE_BEGIN:
      return { ...state, loading: true, error: null, response: null, };
    case Actions.REFRESH_PROFILE_SUCCESS:
      return { ...state, loading: false, error: null, response: action.response, };
    case Actions.REFRESH_PROFILE_FAILURE:
      return { ...state, loading: false, error: action.error, };
    default:
      return state;
  }
};

export default refreshProfile;
import * as Actions from '../constants/createProfile';

const initialState = {
  error: null,
  loading: false,
  response: null,
}

const createProfile = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CREATE_PROFILE_BEGIN:
      return { ...state, loading: true, error: null, response: null, };
    case Actions.CREATE_PROFILE_SUCCESS:
      return { ...state, loading: false, error: null, response: action.response, };
    case Actions.CREATE_PROFILE_FAILURE:
      return { ...state, loading: false, error: action.error, };
    default:
      return state;
  }
};

export default createProfile;
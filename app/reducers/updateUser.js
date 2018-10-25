import * as Actions from '../constants/updateUser';

const initialState = {
  error: null,
  loading: false,
  response: null,
}

const updateUser = (state = initialState, action) => {
  switch (action.type) {
    case Actions.UPDATE_USER_BEGIN:
      return { ...state, loading: true, error: null, response: null, };
    case Actions.UPDATE_USER_SUCCESS:
      return { ...state, loading: false, error: null, response: action.response, };
    case Actions.UPDATE_USER_FAILURE:
      return { ...state, loading: false, error: action.error, };
    case Actions.RESET_UPDATE_USER_STATE:
      return initialState;
    default:
      return state;
  }
};

export default updateUser;
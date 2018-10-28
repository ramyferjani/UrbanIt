import * as Actions from '../constants/searchMatch';

const initialState = {
  error: null,
  loading: false,
  response: null,
}

const searchMatch = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SEARCH_MATCH_BEGIN:
      return { ...state, loading: true, error: null, response: null, };
    case Actions.SEARCH_MATCH_SUCCESS:
      return { ...state, loading: false, error: null, response: action.response, };
    case Actions.SEARCH_MATCH_FAILURE:
      return { ...state, loading: false, error: action.error, };
    case Actions.RESET_SEARCH_MATCH_STATE:
      return initialState;
    default:
      return state;
  }
};

export default searchMatch;
import * as Actions from '../constants/fillScores';

const initialState = {
  error: null,
  loading: false,
  response: null,
}

const fillScores = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FILL_SCORES_BEGIN:
      return { ...state, loading: true, error: null, response: null, };
    case Actions.FILL_SCORES_SUCCESS:
      return { ...state, loading: false, error: null, response: action.response, };
    case Actions.FILL_SCORES_FAILURE:
      return { ...state, loading: false, error: action.error, };
    default:
      return state;
  }
};

export default fillScores;
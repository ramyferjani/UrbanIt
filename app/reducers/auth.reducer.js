import { LOGIN_BEGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, REGISTER_BEGIN, REGISTER_SUCCESS, REGISTER_FAILURE } from '../lib/constants';

const initialState = {
  isLoggedIn: false,
  user: {},
  token: null,
  error: null,
  loading: false,
  login: false,
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_BEGIN:
      return { ...state, loading: true, error: null, login: true, };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.user, token: action.token, isLoggedIn: true, error: null, login: false, };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.error, };
    case REGISTER_BEGIN:
      return { ...state, loading: true, error: null, };
    case REGISTER_SUCCESS:
      return { ...state, loading: false, user: action.user, token: action.token, isLoggedIn: true, };
    case REGISTER_FAILURE:
      return { ...state, loading: false, error: action.error, };
    case LOGOUT:
      return { ...state, isLoggedIn: false, user: {}, token: null, };
    default:
      return state;
  }
};

export default auth;
import { SET_PROFILES, ADD_PROFILE } from '../constants/profiles';

const initialState = [];

const profiles = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILES:
      return action.profiles;
    case ADD_PROFILE:
      return [...state, action.profile];
    default:
      return state;
  }
};

export default profiles;
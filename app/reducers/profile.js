import { CHANGE_PROFILE } from '../constants/profile';

const initialState = {};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PROFILE:
      return action.profile;
    default:
      return state;
  }
};

export default profile;
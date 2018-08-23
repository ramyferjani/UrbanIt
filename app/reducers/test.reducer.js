import * as Actions from '../actions/index.actions';

const test = (state = {}, action) => {
  switch (action.type) {
  case Actions.TEST_ACTION: {
    return action.payload;
  }
  default:
    return state;
  }
};

export default test;
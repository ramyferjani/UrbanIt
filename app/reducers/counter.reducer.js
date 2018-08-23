import * as Actions from '../actions/index.actions';

const counter = (state = 0, action) => {
  switch(action.type) {
    case Actions.COUNTER_INCREMENT:
      return state + 1;
    case Actions.COUNTER_DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default counter;
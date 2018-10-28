import * as Actions from '../constants/sports';

const initialState = {
  availableSports: [],
  unavailableSports: [],
};

const sports = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_AVAILABLE_SPORTS:
      return { ...state, availableSports: action.sports };
    case Actions.SET_UNAVAILABLE_SPORTS:
      return { ...state, unavailableSports: action.sports };
    case Actions.ADD_AVAILABLE_SPORT:
      return { ...state, availableSports: [...state.availableSports, action.sport] };
    case Actions.REMOVE_AVAILABLE_SPORT:
      return { ...state, availableSports: state.availableSports.filter(sport => sport !== action.sport) }
    case Actions.ADD_UNAVAILABLE_SPORT:
      return { ...state, unavailableSports: [...state.unavailableSports, action.sport] };
    case Actions.REMOVE_UNAVAILABLE_SPORT:
      return { ...state, unavailableSports: state.unavailableSports.filter(sport => sport !== action.sport) }
    default:
      return state;
  }
};

export default sports;
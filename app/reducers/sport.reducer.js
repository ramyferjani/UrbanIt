import { FOOTBALL,  BASKETBALL} from '../lib/constants';

const initialState = {
  name: 'football',
  maxPlayers: 5
};

const sport = (state = initialState, action) => {
  switch (action.type) {
    case FOOTBALL:
      return { ...state, name: 'football' };
    case BASKETBALL:
      return { ...state, name: 'basketball', maxPlayers: 4 };
    default:
      return state;
  }
};

export default sport;
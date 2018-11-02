import axios from 'axios';

import * as Actions from '../constants/sports';

export function setAvailableSports(sports) {
  return {
    type: Actions.SET_AVAILABLE_SPORTS,
    sports
  }
}

export function setUnavailableSports(sports) {
  return {
    type: Actions.SET_UNAVAILABLE_SPORTS,
    sports
  }
}

export function addAvailableSport(sport) {
  return {
    type: Actions.ADD_AVAILABLE_SPORT,
    sport
  }
}

export function removeAvailableSport(sport) {
  return {
    type: Actions.REMOVE_AVAILABLE_SPORT,
    sport
  }
}

export function addUnavailableSports(sport) {
  return {
    type: Actions.ADD_AVAILABLE_SPORT,
    sport
  }
}

export function removeUnavailableSports(sport) {
  return {
    type: Actions.REMOVE_UNAVAILABLE_SPORT,
    sport
  }
}

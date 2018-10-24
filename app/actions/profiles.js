
import * as Actions from '../constants/profiles';

export function setProfiles(profiles) {
  return {
    type: Actions.SET_PROFILES,
    profiles
  }
}

export function addProfile(profile) {
  return {
    type: Actions.ADD_PROFILE,
    profile
  }
}


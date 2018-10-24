import * as Actions from '../constants/profile';

export function changeProfile(profile) {
  return {
    type: Actions.CHANGE_PROFILE,
    profile
  }
}
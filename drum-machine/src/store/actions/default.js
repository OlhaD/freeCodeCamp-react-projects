import {SET_KEYDOWN_KEY} from './actionTypes'

export function setKeyDownKey(key) {
  return {
    type: SET_KEYDOWN_KEY,
    payload: key
  }
}
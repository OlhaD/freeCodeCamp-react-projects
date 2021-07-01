import {SET_ACTIVE_BUTTON} from './actionTypes'

export function setActiveButton(button) {
  return {
    type: SET_ACTIVE_BUTTON,
    payload: button
  }
}
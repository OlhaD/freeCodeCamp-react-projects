import {SET_KEYDOWN_KEY} from '../actions/actionTypes';

const initialState = {
    pressedKey: ""
}

export default function defaultReducer(state = initialState, action) {
  switch (action.type) {
    case SET_KEYDOWN_KEY:
      return {
        ...state,
        pressedKey: action.payload
      }
    default:
      return state
  }
}
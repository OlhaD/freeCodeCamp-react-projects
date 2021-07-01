import {SET_ACTIVE_BUTTON} from '../actions/actionTypes';

const initialState = {
  activeButton: null
}

export default function createReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_BUTTON:
      return {
        ...state,
        activeButton: {
            text: action.payload.text,
            audioSrc: action.payload.audioSrc
        }
      }
    default:
      return state
  }
}
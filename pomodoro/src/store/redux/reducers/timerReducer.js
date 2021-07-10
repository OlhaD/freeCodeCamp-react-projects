import { CHANGE_BREAK_LENGTH, CHANGE_SESSION_LENGTH, PLAY_TOGGLE, RESTART, COUNTDOWN, SESSION_BRAKE_TOGGLER } from '../actions/actionTypes';

const initialState = {
    defaultSessionLength: 25,
    defaultBreakLength: 5,
    sessionLength: 25,
    breakLength: 5,
    isBreak: false,
    isPlaying: false,
    secondsLeft: 25 * 60
}

export default function createReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_BREAK_LENGTH: {
        return changeBreakLengthHandler(state, action);
    }
    case CHANGE_SESSION_LENGTH: {
        return changeSessionLengthHandler(state, action);
    }
    case PLAY_TOGGLE: {
        return playToggleHandler(state);
    }
    case RESTART: {
        return restartHandler(state);
    }
    case COUNTDOWN: {
        return countdownHandler(state);
    }
    case SESSION_BRAKE_TOGGLER: {
        return sessionBrakeToggler(state);
    }
    default:
      return state
  }
}

function changeBreakLengthHandler(state, action){
    if(action.length < 1) action.length = 1;
    if(action.length > 60) action.length = 60;

    return {
        ...state,
        breakLength: action.length
    }
}

function changeSessionLengthHandler(state, action){
    if(action.length < 1) action.length = 1;
    if(action.length > 60) action.length = 60;
    
    return {
        ...state,
        sessionLength: action.length,
        secondsLeft: action.length * 60
    }
}

function playToggleHandler(state){
    return {
        ...state,
        isPlaying: !state.isPlaying
    }
}

function restartHandler(state){
    return {
        ...state,
        isBreak: false,
        isPlaying: false,
        sessionLength: state.defaultSessionLength,
        breakLength: state.defaultBreakLength,
        secondsLeft: state.defaultSessionLength * 60
    }
}

function countdownHandler(state){
    return {
        ...state,
        secondsLeft: state.secondsLeft - 1
    }
}

function sessionBrakeToggler(state){
    return {
        ...state,
        isBreak: !state.isBreak,
        secondsLeft: state.isBreak ? state.sessionLength * 60 : state.breakLength * 60
    }
}
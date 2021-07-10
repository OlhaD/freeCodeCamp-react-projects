import { CHANGE_BREAK_LENGTH, CHANGE_SESSION_LENGTH, PLAY_PAUSE, RESTART, COUNTDOWN, SESSION_BRAKE_TOGGLER } from "./actionTypes";

export function onBreakLengthChange(length) {
    return {
        type: CHANGE_BREAK_LENGTH,
        length
      }
}

export function onSessionLengthChange(length) {
    return {
        type: CHANGE_SESSION_LENGTH,
        length
      }
}

export function onPlayPauseClick(play) {
    return {
        type: PLAY_PAUSE,
        play
      }
}

export function onRestart(length) {
    return {
        type: RESTART
      }
}

export function onCountDown() {
    return {
        type: COUNTDOWN
    }
}

export function onSessionBrakeToggle(){
    return {
        type: SESSION_BRAKE_TOGGLER
    }
}
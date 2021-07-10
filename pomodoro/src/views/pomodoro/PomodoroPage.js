import React from 'react';
import {connect} from 'react-redux';
import * as classes from './PomodoroPage.module.scss';
import TimerLength from '../../components/TimerLength/TimerLength';
import Timer from '../../components/Timer/Timer';
import TimerControls from '../../components/TimerControls/TimerControls';
import { onBreakLengthChange, onSessionLengthChange, onPlayPauseClick, onRestart, onCountDown, onSessionBrakeToggle } from '../../store/redux/actions/timer';

function PomodoroPage(props) {
    const header = "25 + 5 Clock";    

    return (
        <div className={classes.Pomodoro}>
            <header>
                <h1>{header}</h1>
            </header>
            <div className={classes.TimerLengthSection}>
                <TimerLength name="Break" length={props.breakLength} disabled={props.isPlaying} onChange={props.onBreakLengthChange} />
                <TimerLength name="Session" length={props.sessionLength} disabled={props.isPlaying} onChange={props.onSessionLengthChange} />
            </div>
            <Timer isBreak={props.isBreak} isPlaying={props.isPlaying} name={props.isBreak ? "Break" : "Session"} duration={props.sessionLength} secondsLeft={props.secondsLeft} 
                onCountDown={props.onCountDown} onSessionBrakeToggle={props.onSessionBrakeToggle}/>
            <TimerControls isPlaying={props.isPlaying} sessionLength={props.defaultSessionLength} breakLength={props.defaultBreakLength} 
                onPlayPauseClick={props.onPlayPauseClick} onRestart={props.onRestart} />
        </div>
    );
}

function mapStateToProps(state){ 
    return { 
        sessionLength: state.sessionLength,
        breakLength: state.breakLength,
        isBreak: state.isBreak,
        isPlaying: state.isPlaying,
        secondsLeft: state.secondsLeft
    }
}

function mapDispatchToProps(dispatch){ 
    return { 
        onBreakLengthChange: (length) => dispatch(onBreakLengthChange(length)),
        onSessionLengthChange: (length) => dispatch(onSessionLengthChange(length)),
        onPlayPauseClick: (play) => dispatch(onPlayPauseClick(play)),
        onRestart: () => dispatch(onRestart()),
        onCountDown: () => dispatch(onCountDown()),
        onSessionBrakeToggle: () => dispatch(onSessionBrakeToggle())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PomodoroPage);
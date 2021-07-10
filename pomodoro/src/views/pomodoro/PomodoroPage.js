import React from 'react';
import * as classes from './PomodoroPage.module.scss';
import TimerLength from '../../components/TimerLength/TimerLength';
import Timer from '../../components/Timer/Timer';
import TimerControls from '../../components/TimerControls/TimerControls';

function PomodoroPage(props) {
    const header = "25 + 5 Clock";
    return (
        <div className={classes.Pomodoro}>
            <header>
                <h1>{header}</h1>
            </header>
            <div className={classes.TimerLengthSection}>
                <TimerLength />
                <TimerLength />
            </div>
            <Timer />
            <TimerControls />
        </div>
    );
}

export default PomodoroPage;
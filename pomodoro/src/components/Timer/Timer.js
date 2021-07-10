import React from 'react';
import * as classes from './Timer.module.scss';

function Timer(props) {

    //var timer = (props.isBreak ? props.breakDuration : props.sessionDuration) * 60;//, minutes, seconds;
    var timer = props.duration * 60;
    var minutes = parseInt(timer / 60, 10);
    var seconds = parseInt(timer % 60, 10);
    // setInterval(function () {
    //     minutes = parseInt(timer / 60, 10)
    //     seconds = parseInt(timer % 60, 10);

    //     minutes = minutes < 10 ? "0" + minutes : minutes;
    //     seconds = seconds < 10 ? "0" + seconds : seconds;

    //     display.textContent = minutes + ":" + seconds;

    //     if (--timer < 0) {
    //         timer = duration;
    //     }
    // }, 1000);

    return (
        <div className={classes.Timer}>
            <header>
                <h2>{props.name}</h2>
            </header>
            <div className={classes.Digits}>
                {minutes} : {seconds.toString.length < 2 ? `0${seconds}` : seconds}
            </div>
        </div>
    );
}

export default Timer;
import React, {useEffect} from 'react';
import * as classes from './Timer.module.scss';

function Timer(props) {
    const audioSrc = "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav";
    const secondsLeftToPlaySignal = 5;
    const secondsLeftToChangeStyles = 60;

    let audio = new Audio(audioSrc);

    let minutes = parseInt(props.secondsLeft / 60, 10);
    let seconds = parseInt(props.secondsLeft % 60, 10);

    useEffect(() => {
        if(!props.isPlaying) return;

        const interval=setInterval(function () {
            props.onCountDown();

            if (props.secondsLeft === secondsLeftToPlaySignal) {
                audio.play();
            }
    
            if (props.secondsLeft <= 0) {
                props.onSessionBrakeToggle();
            }
    
            if(!props.isPlaying || props.secondsLeft <= 0) {
                clearInterval(interval);
            }
        }, 1000);
        
        return () => clearInterval(interval);
      });

    return (
        <div className={[classes.Timer, props.secondsLeft <= secondsLeftToChangeStyles ? classes.LastMinute : ""].join(" ")}>
            <header>
                <h2>{props.name}</h2>
            </header>
            <div className={classes.Digits}>
                {minutes.toString().length < 2 ? `0${minutes}` : minutes} : {(props.secondsLeft % 60).toString().length < 2 ? `0${seconds}` : seconds}
            </div>
        </div>
    );
}

export default Timer;
import React from 'react';
import * as classes from './Button.module.scss';

function Button(props) {
    let audio = new Audio(props.audioSrc);

    const start = () => {
        audio.play();
    };

    const keyPressed = props.keyPressed.toLowerCase();
    if(props.name.toLowerCase() === keyPressed) {
        audio.play();
    }

    return (
        <span>
            <button className={classes.Button} onClick={start} disabled={props.disabled}>
                {props.name}
            </button>
        </span>
    );
}

export default Button;
import React from 'react';
import * as classes from './Button.module.scss';

function Button(props) {
    let audio = new Audio(props.audioSrc);

    const start = () => {
        audio.play();
        buttonActivatedHandler();
    };

    const keyPressed = props.keyPressed.toLowerCase();
    if(props.name.toLowerCase() === keyPressed && !props.disabled) {
        audio.play();
        buttonActivatedHandler();
    }

    function buttonActivatedHandler(){
        props.onButtonActivated({
            text: props.name,
            message: props.message,
            audioSrc: props.audioSrc
        })
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
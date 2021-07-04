import React from 'react';
import * as classes from './NumPad.module.scss';
import Button from '../UI/Button/Button';

function NumPad(props) {
    return (
        <div className={classes.NumbersPad}>
            {
                props.buttons.map((button, key) => (
                    <Button key={key} keyPressed={props.pressedKey} name={button.text} audioSrc={button.audioSrc} />)
                )
            }
        </div>
    );
}

export default NumPad;
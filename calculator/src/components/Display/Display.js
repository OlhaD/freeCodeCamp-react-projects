import React from 'react';
import * as classes from './Display.module.scss'

function Display(props) {
    return (
        <div className={classes.Display}>
            <div className={classes.Formula}>{props.formula}</div>
            <div className={classes.Output}>{props.input}</div>
        </div>
    );
}

export default Display;
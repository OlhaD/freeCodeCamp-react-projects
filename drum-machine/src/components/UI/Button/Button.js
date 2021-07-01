import React from 'react';
import * as classes from './Button.module.scss';

function Button(props) {
    return (
        <span>
            <button className={classes.Button}>{props.name}</button>
        </span>
    );
}

export default Button;
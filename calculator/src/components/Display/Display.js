import React from 'react';
import * as classes from './Display.module.scss'

function Display(props) {
    return (
        <div className={classes.Display}>
            <div className={classes.Formula}>333</div>
            <div className={classes.Output}>444</div>
        </div>
    );
}

export default Display;
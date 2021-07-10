import React from 'react';
import * as classes from './TimerControls.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faSync } from "@fortawesome/free-solid-svg-icons";

function TimerControls(props) {
    return (
        <div className={classes.TimerControls}>
             <FontAwesomeIcon icon={faPlay} />
             <FontAwesomeIcon icon={faPause} />
             <FontAwesomeIcon icon={faSync} />
        </div>
    );
}

export default TimerControls;
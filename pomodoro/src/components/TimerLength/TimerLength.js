import React from 'react';
import * as classes from './TimerLength.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

function TimerLength(props) {
    return (
        <div className={classes.TimerLength}>
            <header><h2>{props.name} Length</h2></header>

            <div className={classes.ValueSection}>
                <FontAwesomeIcon icon={faArrowDown} />
                <div><h3>{props.defaultLength}</h3></div>
                <FontAwesomeIcon icon={faArrowUp} />
            </div>
        </div>
    );
}

export default TimerLength;
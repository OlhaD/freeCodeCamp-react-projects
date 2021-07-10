import React from 'react';
import * as classes from './TimerLength.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

function TimerLength(props) {
    function onChangeHandler(event, length){
        event.preventDefault();
        
        if(!props.disabled){
            props.onChange(length);
        }
    }

    return (
        <div className={classes.TimerLength}>
            <header><h2>{props.name} Length</h2></header>
            
            <div className={classes.ValueSection}>
                <FontAwesomeIcon icon={faArrowDown} onClick={(event) => onChangeHandler(event, props.length - 1)} />
                <div><h3>{props.length}</h3></div>
                <FontAwesomeIcon icon={faArrowUp} onClick={(event) => onChangeHandler(event, props.length + 1)} />
            </div>
        </div>
    );
}

export default TimerLength;
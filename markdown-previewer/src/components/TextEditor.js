import React from 'react';
import classes from './TextEditor.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";

function TextEditor(props) {
    return (
        <div className={classes.TextEditor}>
            <header className={classes.Header}>
                <div>
                    <FontAwesomeIcon icon={faFreeCodeCamp} />
                    <span>{props.header}</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faExpandArrowsAlt} />
                </div>
            </header>
        
            {
                props.isEditor 
                    ? <textarea onChange={props.onTextAreaChanged} className={classes.Body} value={props.value} />
                    : <div className={classes.Body} dangerouslySetInnerHTML={{__html: props.value}}></div>
            }            
        </div>
    );
}

export default TextEditor;
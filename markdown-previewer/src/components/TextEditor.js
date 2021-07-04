import React, { useState } from 'react';
import classes from './TextEditor.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { faExpandArrowsAlt,faCompressAlt } from "@fortawesome/free-solid-svg-icons";

function TextEditor(props) {
    const [isExpanded, setIsExpanded] = useState(false);

    function onSizeChanged (shouldExpand){
        setIsExpanded(!isExpanded);
        props.onSizeChanged(shouldExpand);
    }

    if(props.hide){
        return (<div></div>);
    }else
    return (
        <div className={classes.TextEditor}>
            <header className={classes.Header}>
                <div>
                    <FontAwesomeIcon icon={faFreeCodeCamp} />
                    <span>{props.header}</span>
                </div>
                {
                    isExpanded
                        ? <FontAwesomeIcon icon={faCompressAlt} onClick={(e) => onSizeChanged(false)} />
                        : <FontAwesomeIcon icon={faExpandArrowsAlt} onClick={(e) => onSizeChanged(true)} />
                }
            </header>
            
            {
                props.isEditor 
                    ? 
                        isExpanded 
                            ? <textarea onChange={props.onTextAreaChanged} className={[classes.Body, classes.ExpandedView]' ')} value={props.value} />
                            : <textarea onChange={props.onTextAreaChanged} className={[classes.Body].join(' ')} value={props.value} />                 
                    : 
                        isExpanded 
                            ? <div className={[classes.Body, classes.ExpandedView].join(' ')} dangerouslySetInnerHTML={{__html: props.value}}></div>
                            : <div className={classes.Body} dangerouslySetInnerHTML={{__html: props.value}}></div>      
            }            
        </div>
    );
}

export default TextEditor;
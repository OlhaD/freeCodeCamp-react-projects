import React from 'react';
import * as classes from './MessageBox.module.scss';

function MessageBox(props) {
    return (
        <div className={classes.MessageBox}>
            {props.text}
        </div>
    );
}

export default MessageBox;
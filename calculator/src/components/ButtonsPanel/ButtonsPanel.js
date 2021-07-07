import React from 'react';
import { buttons } from './buttonsConfig';
import * as classes from './ButtonsPanel.module.scss';

function ButtonsPanel(props) {
    function onClickHandler(button) {
        props.onButtonClicked(button);
    }

    return (
        <div className={classes.ButtonsPanel}>
            {
                buttons.map((button, index) => (
                    <button type="button" id={button.id} key={index} className={classes.Button} 
                        buttontype={button.type} onClick={() => onClickHandler(button)}>{button.text}</button>
                ))
            }
        </div>
    );
}

export default ButtonsPanel;
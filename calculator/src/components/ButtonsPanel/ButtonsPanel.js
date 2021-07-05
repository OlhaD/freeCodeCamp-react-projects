import React from 'react';
import * as classes from './ButtonsPanel.module.scss';

function ButtonsPanel(props) {
    const buttonType = {
        ACTION: "action",
        NUMBER: "number"
    }

    const buttons = [{
        id: "clean",
        text: "AC",
        type: buttonType.ACTION
    }, {
        id: "divide",
        text: "/",
        type: buttonType.ACTION
    }, {
        id: "multiply",
        text: "X",
        type: buttonType.ACTION
    }, {
        id: "minus",
        text: "-",
        type: buttonType.ACTION
    }, {
        id: "plus",
        text: "+",
        type: buttonType.ACTION
    }, {
        id: "equal",
        text: "=",
        type: buttonType.ACTION
    }, {
        id: "0",
        text: "0",
        type: buttonType.NUMBER
    }, {
        id: "1",
        text: "1",
        type: buttonType.NUMBER
    }, {
        id: "2",
        text: "2",
        type: buttonType.NUMBER
    }, {
        id: "3",
        text: "3",
        type: buttonType.NUMBER
    }, {
        id: "4",
        text: "4",
        type: buttonType.NUMBER
    }, {
        id: "5",
        text: "5",
        type: buttonType.NUMBER
    }, {
        id: "6",
        text: "6",
        type: buttonType.NUMBER
    }, {
        id: "7",
        text: "7",
        type: buttonType.NUMBER
    }, {
        id: "8",
        text: "8",
        type: buttonType.NUMBER
    }, {
        id: "9",
        text: "9",
        type: buttonType.NUMBER
    }, {
        id: "dot",
        text: ".",
        type: buttonType.NUMBER
    }]

    return (
        <div className={classes.ButtonsPanel}>
            {
                buttons.map((button, index) => (
                    <button type="button" id={button.id} key={index} className={classes.Button} buttontype={button.type}>{button.text}</button>
                ))
            }
        </div>
    );
}

export default ButtonsPanel;
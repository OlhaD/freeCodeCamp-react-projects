import React, {useState} from 'react';
import { ActionButtonValue } from '../../share/enums/actionButtonValue';
import { ButtonType } from '../../share/enums/buttonType';
import ButtonsPanel from '../ButtonsPanel/ButtonsPanel';
import Display from '../Display/Display';
import * as classes from './Calculator.module.scss';
import {handleNumber, handleAction} from './calculatorHandler';

function Calculator(props) {
    const [input, setInput] = useState("0");
    const [formula, setFormula] = useState("");

    function buttonClickedHandler(button){
        switch(button.type) {
            case ButtonType.NUMBER: {
                handleNumber(input, formula, button.text, setInput, setFormula);
                return;
            }
            case ButtonType.ACTION: {
                handleAction(input, formula, button.actionValue, button.text, setInput, setFormula);
                return;
            }
        }
    }
    
    return (
        <div className={classes.Calculator}>
            <Display input={input} formula={formula} />
            <ButtonsPanel onButtonClicked={(e) => buttonClickedHandler(e)} />
        </div>
    );
}

export default Calculator;
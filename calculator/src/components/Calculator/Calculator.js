import React from 'react';
import ButtonsPanel from '../ButtonsPanel/ButtonsPanel';
import Display from '../Display/Display';
import * as classes from './Calculator.module.scss'

function Calculator(props) {
    return (
        <div className={classes.Calculator}>
            <Display />
            <ButtonsPanel />
        </div>
    );
}

export default Calculator;
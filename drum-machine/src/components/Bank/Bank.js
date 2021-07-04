import React from 'react';
import * as classes from './Bank.module.scss';
import Toggler from '../UI/Toggler/Toggler';

function Bank(props) {
    function onBankChanged(isOn) {
        props.onChanged(isOn);
    }

    return (
        <div className={classes.Bank}>
            <header>
                <h3>Bank</h3>
            </header>

            <Toggler disabled={!props.isPowerOn} isOn={props.isOn} onToggled={(isOn) => onBankChanged(isOn)}/>
        </div>
    );
}

export default Bank;
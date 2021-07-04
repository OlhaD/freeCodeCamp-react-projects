import React from 'react';
import * as classes from './Power.module.scss';
import Toggler from '../UI/Toggler/Toggler';

function Power(props) {
    function onPowerChanged(isOn) {
        props.onChanged(isOn);
    }

    return (
        <div className={classes.Power}>
            <header>
                <h3>Power</h3>
            </header>

            <Toggler onToggled={(isOn) => onPowerChanged(isOn)}/>
        </div>
    );
}

export default Power;
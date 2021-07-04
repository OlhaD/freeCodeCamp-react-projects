import React, {useState} from 'react';
import * as classes from './Toggler.module.scss';

function Toggler(props) {
    const [isOn, setIsOn] = useState(props.isOn);

    function onTogglerClicked(isOn){
        if(props.disabled){
            return;
        }

        setIsOn(isOn);
        props.onToggled(isOn);
    }

    return (
        <div className={classes.Toggler}>
            <div className={[classes.Half, isOn ? "" : classes.Active].join(' ')} onClick={() => onTogglerClicked(!isOn)}></div>
            <div className={[classes.Half, isOn ? classes.Active : ""].join(' ')} onClick={() => onTogglerClicked(!isOn)}></div>
        </div>
    );
}

export default Toggler;
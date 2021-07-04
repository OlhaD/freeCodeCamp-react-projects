import React, {useState} from 'react';
import {connect} from 'react-redux'
import * as classes from './DrumPad.module.scss';
import {setActiveButton} from '../../store/actions/drumPad';
import NumPad from '../NumPad/NumPad';
import Power from '../Power/Power';

function DrumPad(props) {
    const buttonsInfo = [
    {
        text: "Q",
        message: "Heater-1",
        audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
        text: "W",
        message: "Heater-2",
        audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
        text: "E",
        message: "Heater-3",
        audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
        text: "A",
        message: "Heater-4",
        audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
        text: "S",
        message: "Clap",
        audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
        text: "D",
        message: "Open-HH",
        audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
        text: "Z",
        message: "Clap",
        audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
        text: "X",
        message: "Kick",
        audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
        text: "C",
        message: "Closed-HH",
        audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }];

    var [isPowerOn, setIsPowerOn] = useState(true);

    function onPowerChanged(isOn){
        setIsPowerOn(isOn);
    }

    return (
        <div className={classes.Display} >
            <NumPad buttons={buttonsInfo} isPowerOn={isPowerOn} pressedKey={props.pressedKey} />

            <div className={classes.RightPanel}>
                <Power onChanged={(isOn) => onPowerChanged(isOn)} />
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        pressedKey: state.default.pressedKey
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      setActiveButton: () => dispatch(setActiveButton())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(DrumPad);
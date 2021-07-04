import React, {useState} from 'react';
import {connect} from 'react-redux'
import * as classes from './DrumPad.module.scss';
import {setActiveButton} from '../../store/actions/drumPad';
import NumPad from '../NumPad/NumPad';
import Power from '../Power/Power';
import MessageBox from '../UI/MessageBox/MessageBox';
import Slider from '../UI/Slider/Slider';
import Bank from '../Bank/Bank';

function DrumPad(props) {
    const buttonsInfo = [
    {
        text: "Q",
        message: "Heater-1",
        audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
        altAudioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
    },
    {
        text: "W",
        message: "Heater-2",
        audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
        altAudioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
    },
    {
        text: "E",
        message: "Heater-3",
        audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
        altAudioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
    },
    {
        text: "A",
        message: "Heater-4",
        audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
        altAudioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
    },
    {
        text: "S",
        message: "Clap",
        audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
        altAudioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
    },
    {
        text: "D",
        message: "Open-HH",
        audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
        altAudioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
    },
    {
        text: "Z",
        message: "Clap",
        audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
        altAudioSrc: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
    },
    {
        text: "X",
        message: "Kick",
        audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
        altAudioSrc: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
    },
    {
        text: "C",
        message: "Closed-HH",
        audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
        altAudioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
    }];

    const sliderSettings = {
        min: 0,
        max: 100,
        value: 40
    }

    var [isPowerOn, setIsPowerOn] = useState(true);
    var [isBankOn, setIsBankOn] = useState(false);
    var [message, setMessage] = useState("");
    var [volume, setVolume] = useState(sliderSettings.value);

    function onPowerChangedHandler(isOn){
        setIsPowerOn(isOn);
        if(!isOn){
            onButtonActivated("")
        }
    }

    function onButtonActivated(activeButton){
        setMessage(activeButton.message);
    }

    function onVolumeChangedHandler(value){
        setVolume(value);
        setMessage(`Volume: ${value}`);
    }

    function onBankChangedHandler(value){
        setIsBankOn(value);
        setMessage(value ? "Smooth Piano Kit" : "Heater Kit");
    }

    return (
        <div className={classes.Display} >
            <NumPad buttons={buttonsInfo} isPowerOn={isPowerOn} isBankOn={isBankOn} pressedKey={props.pressedKey} 
                onButtonActivated={(button) => onButtonActivated(button)} volume={volume} />

            <div className={classes.RightPanel}>
                <div>
                    <Power isOn={isPowerOn} onChanged={(isOn) => onPowerChangedHandler(isOn)} />
                </div>

                <div>
                    <MessageBox text={message} />
                </div>

                <div>
                    <Slider disabled={!isPowerOn} min={sliderSettings.min} max={sliderSettings.max} onChange={(volume) => onVolumeChangedHandler(volume)} />
                </div>

                <div>
                    <Bank isPowerOn={isPowerOn} isOn={isBankOn} onChanged={(isOn) => onBankChangedHandler(isOn)} />
                </div>
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
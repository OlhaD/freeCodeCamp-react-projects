import React from 'react';

function Slider(props) {
    function sliderChangedHandler(e){
        props.onChange(e.target.value);
    }

    return (
        <div>
            <input type="range" min={props.min} max={props.max} value={props.value} onChange={(e) => sliderChangedHandler(e)}></input>
        </div>
    );
}

export default Slider;
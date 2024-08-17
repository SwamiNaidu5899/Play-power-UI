import React from 'react';
import '../styles/SliderComponent.css';

const SliderComponent = ({ time, setTime }) => {
    const handleSliderChange = (event) => {
        setTime(event.target.value);
    };

    return (
        <div className="slider-container">
            <input
                type="range"
                min="0"
                max="23"
                value={time}
                onChange={handleSliderChange}
                className="slider"
            />
            <div className="time-display">
                {`${time}:00`}
            </div>
        </div>
    );
};

export default SliderComponent;

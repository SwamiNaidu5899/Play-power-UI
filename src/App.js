import React, { useState } from 'react';
import SliderComponent from './components/SliderComponent';
import TimezoneList from './components/TimezoneList';
import DatePickerComponent from './components/DatePickerComponent';
import DarkModeToggle from './components/DarkModeToggle';
import GoogleMeetButton from './components/GoogleMeetButton';
import AddTimezoneForm from './components/AddTimezoneForm';
import './App.css';

const App = () => {
    const [time, setTime] = useState(12); 
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [darkMode, setDarkMode] = useState(false);
    const [timezones, setTimezones] = useState(['UTC', 'IST']);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const addTimezone = (timezone) => {
        if (!timezones.includes(timezone)) {
            setTimezones([...timezones, timezone]);
        }
    };

    const handleRemove = (timezoneToRemove) => {
        setTimezones((prevTimezones) =>
            prevTimezones.filter((timezone) => timezone !== timezoneToRemove)
        );
    };

    return (
        <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
            <h1>Timezone Converter</h1>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-around'}}>
                <GoogleMeetButton time={time} timezone="UTC" />
                <AddTimezoneForm addTimezone={addTimezone} />
                <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
            <SliderComponent time={time} setTime={setTime} />
            <DatePickerComponent selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            <TimezoneList 
                timezones={timezones} 
                time={time} 
                handleRemove={handleRemove} 
            />
        </div>
    );
};

export default App;

import React from 'react';
import '../styles/DarkModeToggle.css';
import dark from '../assets/mode (1).png';
import light from '../assets/mode.png';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
    return (
        <div className="dark-mode-toggle">
            <img
                src={darkMode ? light : dark}
                alt='DarkMode'
                onClick={toggleDarkMode}
                className="toggle-icon"
            />
        </div>
    );
};

export default DarkModeToggle;

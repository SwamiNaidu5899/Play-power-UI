import React from 'react';
import { format, toZonedTime } from 'date-fns-tz';
import '../styles/TimezoneList.css';

const TimezoneList = ({ timezones, time, handleRemove }) => {
    const displayTime = (timezone) => {
        const date = new Date();
        date.setHours(time);
        const zonedTime = toZonedTime(date, timezone);
        return format(zonedTime, 'hh:mm a');
    };

    return (
        <div className="timezone-list">
            {timezones.map((timezone) => (
                <div key={timezone} className="timezone-item">
                    <span>{timezone}: {displayTime(timezone)}</span>
                    {/* Remove button */}
                    <button 
                        className="remove-btn"
                        onClick={() => handleRemove(timezone)}
                    >
                        &times;
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TimezoneList;

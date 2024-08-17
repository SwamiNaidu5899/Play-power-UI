import React from 'react';
import '../styles/GoogleMeetButton.css'; 

const GoogleMeetButton = ({ time, timezone }) => {
    const startDateTime = new Date();
    startDateTime.setHours(time);
    const endDateTime = new Date(startDateTime);
    endDateTime.setHours(startDateTime.getHours() + 2);

    const formatDateForGoogleCalendar = (date) => {
        return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const formattedStartDate = formatDateForGoogleCalendar(startDateTime);
    const formattedEndDate = formatDateForGoogleCalendar(endDateTime);

    const googleMeetURL = `https://calendar.google.com/calendar/u/0/r/eventedit?text=Meeting&dates=${formattedStartDate}/${formattedEndDate}&details=Meeting%20details&location=Meeting%20location`;

    return (
        <a
            href={googleMeetURL}
            target="_blank"
            rel="noopener noreferrer"
        >
           <button className='google-meet-button'>Schedule Google Meet</button>
        </a>
    );
};

export default GoogleMeetButton;

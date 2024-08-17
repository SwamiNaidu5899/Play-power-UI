import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/DatePickerComponent.css';

const DatePickerComponent = ({ selectedDate, setSelectedDate }) => {
    return (
        <div className="date-picker-container">
            <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
            />
        </div>
    );
};

export default DatePickerComponent;

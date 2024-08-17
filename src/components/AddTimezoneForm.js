import React, { useState } from 'react';
import '../styles/AddTimezoneForm.css';

const availableTimezones = [
    'UTC', 'IST', 'PST', 'CST', 'EST', 'GMT'
];

const AddTimezoneForm = ({ addTimezone }) => {
    const [selectedTimezone, setSelectedTimezone] = useState(availableTimezones[0]);

    const handleSubmit = (e) => {
        e.preventDefault();
        addTimezone(selectedTimezone);
    };

    return (
        <div className="add-timezone-form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="timezone">Select Timezone:</label>
                <select
                    id="timezone"
                    value={selectedTimezone}
                    onChange={(e) => setSelectedTimezone(e.target.value)}
                >
                   {availableTimezones.map((timezone) => (
                        <option key={timezone} value={timezone}>
                            {timezone}
                        </option>
                    ))}
                </select>
                <button type="submit">Add Timezone</button>
            </form>
        </div>
    );
};

export default AddTimezoneForm;

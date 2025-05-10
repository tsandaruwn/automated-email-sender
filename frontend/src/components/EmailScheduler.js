import React, { useState } from 'react';
import '../styles/PageStyles.css'; // Assuming you have a CSS file for styling

const EmailScheduler = () => {
  const [template, setTemplate] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [interval, setInterval] = useState('');
  const [quantity, setQuantity] = useState('');

  return (
    <div className="page-container">
      <h1>Schedule Automated Emails</h1>
      <form className="form">
        <select value={template} onChange={e => setTemplate(e.target.value)}>
          <option value="">Select Template</option>
        </select>
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        <input type="time" value={time} onChange={e => setTime(e.target.value)} />
        <input type="text" placeholder="Duration (e.g., 1 week)" value={interval} onChange={e => setInterval(e.target.value)} />
        <input type="number" placeholder="Email Quantity" value={quantity} onChange={e => setQuantity(e.target.value)} />
        <button type="submit">Schedule</button>
      </form>
    </div>
  );
};

export default EmailScheduler;

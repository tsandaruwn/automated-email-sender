import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/PageStyles.css';

const EmailScheduler = () => {
  const [templates, setTemplates] = useState([]);
  const [formData, setFormData] = useState({
    template: '',
    date: '',
    time: '',
    duration: '',
    quantity: '',
    receivers: ''
  });

  useEffect(() => {
    fetchTemplates();
  }, []);

  const fetchTemplates = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/templates/');
      setTemplates(response.data);
    } catch (error) {
      console.error('Error fetching templates:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const scheduleData = {
        template: parseInt(formData.template),
        scheduled_date: formData.date,
        scheduled_time: formData.time,
        interval: formData.duration,
        quantity: parseInt(formData.quantity),
        receivers: formData.receivers.split(',').map(email => email.trim())
      };

      const response = await axios.post('http://localhost:8000/api/schedules/', scheduleData);

      if (response.status === 201) {
        alert('Email scheduled successfully!');
        setFormData({
          template: '',
          date: '',
          time: '',
          duration: '',
          quantity: '',
          receivers: ''
        });
      }
    } catch (error) {
      console.error('Scheduling error:', error.response?.data);
      alert('Error scheduling email: ' + (error.response?.data?.detail || error.message));
    }
  };

  return (
    <div className="page-container">
      <h1>Schedule Automated Emails</h1>
      <form className="form" onSubmit={handleSubmit}>
        <select 
          name="template"
          value={formData.template}
          onChange={handleChange}
          required
        >
          <option value="">Select Template</option>
          {templates.map(t => (
            <option key={t.id} value={t.id}>{t.name}</option>
          ))}
        </select>
        <input 
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input 
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <input 
          type="text"
          name="duration"
          placeholder="Duration (e.g., 1 week)"
          value={formData.duration}
          onChange={handleChange}
          required
        />
        <input 
          type="number"
          name="quantity"
          placeholder="Email Quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="receivers"
          placeholder="Receiver Emails (comma separated)"
          value={formData.receivers}
          onChange={handleChange}
          required
        />
        <button type="submit">Schedule Email</button>
      </form>
    </div>
  );
};

export default EmailScheduler;

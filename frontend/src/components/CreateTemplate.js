import React, { useState } from 'react';
import axios from 'axios';
import { API_ENDPOINTS } from '../config';

const CreateTemplate = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    body: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_ENDPOINTS.templates, formData);
      if (response.status === 201) {
        alert('Template created successfully!');
        setFormData({ name: '', subject: '', body: '' });
      }
    } catch (error) {
      console.error('Error creating template:', error);
      alert('Failed to create template: ' + (error.response?.data?.detail || error.message));
    }
  };

  return (
    <div className="page-container">
      <h1>Create Email Template</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Template Name"
          required
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Email Subject"
          required
        />
        <textarea
          name="body"
          value={formData.body}
          onChange={handleChange}
          placeholder="Email Body"
          rows="10"
          required
        />
        <button type="submit">Create Template</button>
      </form>
    </div>
  );
};

export default CreateTemplate;
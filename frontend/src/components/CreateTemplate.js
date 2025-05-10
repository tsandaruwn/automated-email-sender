import React, { useState } from 'react';
import '../styles/PageStyles.css'; // Assuming you have a CSS file for styling

const CreateTemplate = () => {
  const [templateName, setTemplateName] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  return (
    <div className="page-container">
      <h1>Create Email Template</h1>
      <form className="form">
        <input type="text" placeholder="Template Name" value={templateName} onChange={e => setTemplateName(e.target.value)} />
        <input type="text" placeholder="Subject" value={subject} onChange={e => setSubject(e.target.value)} />
        <textarea placeholder="Email Body" rows="10" value={body} onChange={e => setBody(e.target.value)} />
        <button type="submit">Save Template</button>
      </form>
    </div>
  );
};

export default CreateTemplate;
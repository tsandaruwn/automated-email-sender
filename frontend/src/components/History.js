import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/PageStyles.css'; // Assuming you have a CSS file for styling

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/history/')
      .then(res => setHistory(res.data))
      .catch(err => console.error('Error fetching history:', err));
  }, []);

  return (
    <div className="page-container">
      <h1>Email History</h1>
      <table className="form" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Body</th>
            <th>Time</th>
            <th>Receiver</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item) => (
            <tr key={item.id}>
              <td>{item.subject}</td>
              <td>{item.body}</td>
              <td>{item.sent_at}</td>
              <td>{item.receiver}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default History;
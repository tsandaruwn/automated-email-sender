import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles/App.css';

import Dashboard from './components/Dashboard';
import CreateTemplate from './components/CreateTemplate';
import EmailScheduler from './components/EmailScheduler';
import History from './components/History';

function App() {
  return (
    <Router>
      <div className="main-container">
        <nav className="sidebar">
          <h2>EmailPro</h2>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/create-template">Create Template</Link></li>
            <li><Link to="/email-scheduler">Schedule Email</Link></li>
            <li><Link to="/history">Email History</Link></li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create-template" element={<CreateTemplate />} />
            <Route path="/email-scheduler" element={<EmailScheduler />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

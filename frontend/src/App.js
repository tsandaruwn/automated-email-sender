import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import './styles/App.css';
import { Home, Mail, Calendar, History as HistoryIcon, Settings } from 'lucide-react';

import Dashboard from './components/Dashboard';
import CreateTemplate from './components/CreateTemplate';
import EmailScheduler from './components/EmailScheduler';
import History from './components/History';

function App() {
  return (
    <Router>
      <div className="main-container">
        <Sidebar />
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

const Sidebar = () => {
  const location = useLocation();

  return (
    <nav className="sidebar">
      <div className="logo">
        <Mail className="logo-icon" />
        <h2>EmailPro</h2>
      </div>
      
      <ul className="nav-links">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">
            <Home size={20} />
            <span>Dashboard</span>
          </Link>
        </li>
        <li className={location.pathname === '/create-template' ? 'active' : ''}>
          <Link to="/create-template">
            <Mail size={20} />
            <span>Create Template</span>
          </Link>
        </li>
        <li className={location.pathname === '/email-scheduler' ? 'active' : ''}>
          <Link to="/email-scheduler">
            <Calendar size={20} />
            <span>Schedule Email</span>
          </Link>
        </li>
        <li className={location.pathname === '/history' ? 'active' : ''}>
          <Link to="/history">
            <HistoryIcon size={20} />
            <span>Email History</span>
          </Link>
        </li>
      </ul>
      
      <div className="sidebar-footer">
        <Link to="/settings" className="settings-link">
          <Settings size={20} />
          <span>Settings</span>
        </Link>
      </div>
    </nav>
  );
};

export default App;

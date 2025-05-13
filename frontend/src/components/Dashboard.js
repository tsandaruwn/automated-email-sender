import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import SystemStats from './SystemStats';
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalEmails: 0,
    activeTemplates: 0,
    scheduledTasks: 0,
    successRate: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/history/get_email_stats/');
        setStats(response.data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
    // Refresh stats every 5 minutes
    const interval = setInterval(fetchStats, 300000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-container">
      <h1>Welcome to EmailPro Dashboard</h1>
      <SystemStats stats={stats} />
      
      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <div className="activity-list">
          {/* Activity items will go here */}
          <p>No recent activity</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
import React from 'react';

const SystemStats = ({ stats }) => {
  const formatNumber = (num) => {
    return num?.toLocaleString() || 0;
  };

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <h3>Total Emails Sent</h3>
        <p className="stat-number">{formatNumber(stats.totalEmails)}</p>
      </div>
      <div className="stat-card">
        <h3>Active Templates</h3>
        <p className="stat-number">{formatNumber(stats.activeTemplates)}</p>
      </div>
      <div className="stat-card">
        <h3>Scheduled Tasks</h3>
        <p className="stat-number">{formatNumber(stats.scheduledTasks)}</p>
      </div>
      <div className="stat-card">
        <h3>Success Rate</h3>
        <p className="stat-number">{stats.successRate?.toFixed(1) || 0}%</p>
      </div>
    </div>
  );
};

export default SystemStats;
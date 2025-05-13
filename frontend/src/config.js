const API_BASE_URL = 'http://localhost:8000/api';

export const API_ENDPOINTS = {
    templates: `${API_BASE_URL}/templates/`,
    schedules: `${API_BASE_URL}/schedules/`,
    history: `${API_BASE_URL}/history/`,
    stats: `${API_BASE_URL}/history/get_email_stats/`
};

export default API_ENDPOINTS;
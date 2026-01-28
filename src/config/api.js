// API Configuration
// Change this to match your backend setup

// Option 1: PHP Built-in Server (port 8000)
// export const API_URL = 'http://localhost:8000/api';

// Option 2: XAMPP Apache (port 80)
// export const API_URL = 'http://localhost/portfolio/backend/api';

// Auto-detect based on environment
export const API_URL = process.env.NODE_ENV === 'production' 
  ? process.env.REACT_APP_API_URL || 'http://localhost/portfolio/backend/api'
  : 'http://localhost:8000/api';

export const CONTACT_ENDPOINT = `${API_URL}/contact.php`;
export const PROJECTS_ENDPOINT = `${API_URL}/projects.php`;
export const TEST_ENDPOINT = `${API_URL}/test.php`;
export const MIGRATE_ENDPOINT = `${API_URL}/migrate.php`;

// API Configuration for development and production
const API_BASE_URL = 
  typeof window !== 'undefined' && window.location.hostname !== 'localhost'
    ? 'https://flavours-apii.onrender.com/api'  // Production backend on Render
    : 'http://localhost:5002/api';               // Local development

export default API_BASE_URL;

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://novatech-backend-9kqw.onrender.com', // This points to your Django backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// ... rest of your interceptor code stays the same ...

export default api;
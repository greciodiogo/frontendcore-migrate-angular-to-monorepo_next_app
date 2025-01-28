import axios from 'axios';

// import { getToken } from '../utils/auth';
import { formatErrors } from '../utils/formatErrors';

const BASE_URL = 'http://localhost:3381/api';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTczNzk2Njc3MywiZXhwIjoxNzM4MDAyNzczfQ.8_Pt1MHZQ8Y5lDHIVg7DYHEkE_qQO7vu5Df57pj6GUM'

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    // const TOKEN = getToken();
    if (TOKEN) {
      config.headers.Authorization = `Bearer ${TOKEN}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    formatErrors(error);
    return Promise.reject(error);
  },
);

export const ApiService = {
  get: (url: string, params = {}) => api.get(url, { params }),
  post: (url: string, data = {}) => api.post(url, data),
  put: (url: string, data = {}) => api.put(url, data),
  delete: (url: string, params = {}) => api.delete(url, { params }),
};

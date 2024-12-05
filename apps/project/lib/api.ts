import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signupUser = async (email: string, password: string, role: string) => {
  try {
    const response = await api.post('/auth/signup', { email, password, role });
    return response.data;
  } catch (error) {
    throw error;
  }
};
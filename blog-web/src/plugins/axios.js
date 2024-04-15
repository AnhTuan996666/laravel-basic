import axios from 'axios';

const httpRequest = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL, 
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
    'Access-Control-Allow-Headers':
    'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, X-CSRF-Token'
  },
});

export const get = async (endpoint, params = {}) => {
  try {
    const response = await httpRequest.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.log('Error message:', error);
    throw error;
  }
};

export const post = async (endpoint, data = {}) => {
  try {
    const response = await httpRequest.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.log('Error message:', error);
    throw error;
  }
};

export const put = async (endpoint, data = {}) => {
  try {
    const response = await httpRequest.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.log('Error message:', error);
    throw error;
  }
};

export const depstroy = async (endpoint) => {
  try {
    const response = await httpRequest.delete(endpoint);
    return response.data;
  } catch (error) {
    console.log('Error message:', error);
    throw error;
  }
};

export default httpRequest;
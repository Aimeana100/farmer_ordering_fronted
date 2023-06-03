/* eslint-disable no-param-reassign */
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

let tokenPromise;

const token = localStorage.getItem('token');

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8080/api',
});

instance.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers.authorization = `Bearer ${JSON.parse(token)}`;
      config.headers['Content-Type'] = `application/json`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const preSetToken = (tokens) => {
  localStorage.setItem('token', tokens);

  // Wait for the token to be set before resolving the promise
  tokenPromise = new Promise((resolve) => {
    resolve();
  });
};

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      (error && error.response && error.response.status === 403) ||
      error.response.status === 401
    ) {
      // Clear the token and state fields from local storage
      // localStorage.removeItem('token');
      // localStorage.removeItem('user');
    }
    return Promise.reject(error);
  }
);

export default instance;

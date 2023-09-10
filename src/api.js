import axios from 'axios';

const api = axios.create({
  baseURL: 'http://20.244.56.144'
});

export const registerCompany = async (data) => {
  return await api.post('/train/register', data);
};

export const authenticate = async (data) => {
  return await api.post('/train/auth', data);
};

export const getAllTrains = async (token) => {
  return await api.get('/train/trains', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://v6.exchangerate-api.com/v6/7966b0b6fece859edef35b0f',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchAPIData = async (endpoint: string, params = {}) => {
  try {
    const response = await api.get(endpoint, {params});
    return response.data;
  } catch (error) {
    throw error;
  }
};

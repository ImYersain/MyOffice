import {useState} from 'react';
import {fetchAPIData} from '../api';

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url: string) => {
    setLoading(true);
    try {
      const response = await fetchAPIData(url);
      setData(response);
      return response;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {loading, error, data, fetchData};
};

import { useState, useEffect } from 'react';
import axios from 'axios';

export const useQuests = () => {
  const [quests, setQuests] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchQuests = async () => {
    setLoading(true);

    axios.get(`${import.meta.env.VITE_API_ENDPOINT}/quest`)
    .then(({ data }) => setQuests(data))
    .catch(err => setError(err))
    .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchQuests();
  }, []);

  return {
    quests,
    loading,
    error,
  };
};

import { useEffect, useState } from 'react';

export const useHttp = ({ fn, recordId, query }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fn({ recordId, query })
      .then(res => setData(res))
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [fn, recordId, query]);

  return { data, setData, isLoading, error };
};

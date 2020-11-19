import axios from 'axios';
import { useEffect, useState } from 'react';
import config from '../config';
import isDev from '../utils/isDev';

interface GetRequestResult<T> {
  data: T | null;
  loading: boolean;
  error?: string;
}

/** @description Creates a GET request to the base URI set up in the config file and the endpoint provided as an argument
 * @param {string} endpoint Endpoint to which the GET request is made
 * @return {Array} The result, loading state and error state as an array which can be destructured
 */
const useGetRequest = <FetchedData>(endpoint: string): GetRequestResult<FetchedData> => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [responseData, setResponseData] = useState<FetchedData | null>(null);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = config.baseURI + endpoint;
        const response = await axios.get<FetchedData>(url);
        setResponseData(response.data);
      } catch (e) {
        if (isDev()) {
          // eslint-disable-next-line no-console
          console.error(e);
        }
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data: responseData, loading: isLoading, error };
};

export default useGetRequest;

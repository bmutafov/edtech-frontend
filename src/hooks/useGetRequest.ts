import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import getBaseUri from '../utils/getBaseUri';
import isDev from '../utils/isDev';

interface GetRequestResult<T> {
  data: T | null;
  loading: boolean;
  error?: string;
  refetch: (_parameters?: Parameters | undefined) => Promise<void>;
}

type Parameters = {
  limit?: number;
  start?: number;
  query?: string;
};

const getParameters = (parameters?: Parameters) => {
  if (!parameters) return '';

  let parametersString = '?' + (parameters.query || '');
  Object.entries(parameters)
    .filter(([key]) => key != 'query')
    .forEach(([key, value], i) => {
      const addAndSymbol = i > 0 || parameters.query ? '&' : '';
      parametersString += `${addAndSymbol}_${key}=${value}`;
    });

  return parametersString;
};

/** @description Creates a GET request to the base URI set up in the config file and the endpoint provided as an argument
 * @param {string} endpoint Endpoint to which the GET request is made
 * @return {Array} The result, loading state and error state as an array which can be destructured
 */
const useGetRequest = <FetchedData>(endpoint: string, parameters?: Parameters): GetRequestResult<FetchedData> => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [responseData, setResponseData] = useState<FetchedData | null>(null);
  const [error, setError] = useState<string | undefined>(undefined);

  const fetchData = useCallback(async (endpoint: string, parameters?: Parameters) => {
    setIsLoading(true);
    try {
      const url = getBaseUri() + endpoint + getParameters(parameters);
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
  }, []);

  const fetchMore = useCallback((_parameters?: Parameters) => fetchData(endpoint, _parameters), [endpoint, fetchData]);

  useEffect(() => {
    fetchData(endpoint, parameters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data: responseData, loading: isLoading, error, refetch: fetchMore };
};

export default useGetRequest;

import axios from 'axios';
import { useEffect, useState } from 'react';
import config from '../config';
import isDev from '../utils/isDev';

export type PostRequestAction<T> = [(data: T) => void, boolean, string?];

/** @description Creates a POST request to the base URI set up in the config file and the endpoint provided as an argument
 * @param {string} endpoint Endpoint to which the POST request is made
 * @return {Array} The result, loading state and error state as an array which can be destructured
 */
const usePostRequest = <DataType>(endpoint: string): PostRequestAction<DataType> => {
  const [calls, setCalls] = useState(0);
  const [requestData, setRequestData] = useState<DataType | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  /**
   * Executes the POST request to the endpoint set in the hook definition
   * @param data The payload of the POST request as an object
   */
  const doRequest = (data: DataType) => {
    setRequestData(data);
    setIsLoading(true);
    setCalls(calls + 1);
  };

  useEffect(() => {
    if (!calls) return;

    const postData = async () => {
      try {
        const url = config.baseURI + endpoint;
        await axios.post(url, requestData);
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

    postData();
  }, [calls]);

  return [doRequest, isLoading, error];
};

export default usePostRequest;

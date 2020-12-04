import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useState } from 'react';
import config from '../config';
import isDev from '../utils/isDev';

export type PostRequestAction<T> = [
  (data: T) => Promise<AxiosResponse<any> | null>,
  {
    loading: boolean;
    error?: string;
  }
];

/** @description Creates a POST request to the base URI set up in the config file and the endpoint provided as an argument
 * @param {string} endpoint Endpoint to which the POST request is made
 * @return {Array} The result, loading state and error state as an array which can be destructured
 */
const usePostRequest = <DataType>(endpoint: string, validateStatus?: boolean): PostRequestAction<DataType> => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  /**
   * Executes the POST request to the endpoint set in the hook definition
   * @param data The payload of the POST request as an object
   */
  const postData = async (data: DataType) => {
    setIsLoading(true);
    const url = config.baseURI + endpoint;

    try {
      const options: AxiosRequestConfig | undefined = validateStatus
        ? {
            validateStatus: () => true,
          }
        : undefined;

      return await axios.post(url, data, options);
    } catch (e) {
      if (isDev()) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
      setError(e);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return [postData, { loading: isLoading, error }];
};

export default usePostRequest;

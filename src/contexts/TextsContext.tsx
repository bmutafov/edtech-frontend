import React from 'react';
import { createContext } from 'react';
import useGetRequest from '../hooks/useGetRequest';
import defaultTexts from '../utils/defaultTexts';

export type TextsScheme = typeof defaultTexts;

export const TextsContext = createContext<TextsScheme>(defaultTexts);

type ReactChildren = { children?: React.ReactNode };

export const TextsContextProvider = ({ children }: ReactChildren): JSX.Element => {
  const { data } = useGetRequest<TextsScheme>('/texts');

  return <TextsContext.Provider value={data || defaultTexts}>{children}</TextsContext.Provider>;
};

import React, { useReducer } from 'react';
import { createContext } from 'react';
import config from '../config/config';
import { AuthContextState, AuthContextReducer, AuthContextActions, UserInfo } from './AuthContext.types';

const unauthorizedState: AuthContextState = {
  loggedIn: false,
};

const initialContextState: AuthContextReducer = {
  state: {
    ...unauthorizedState,
  },
  dispatch: () => undefined,
};

export const AuthContext = createContext<AuthContextReducer>(initialContextState);

const reducer = (state: AuthContextState, action: AuthContextActions) => {
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        ...action.payload,
      };
    }
    case 'LOGOUT': {
      return unauthorizedState;
    }

    default:
      throw new Error('Unrecognized Auth action');
  }
};

const isUserInfoValid = (storageEntry: string): UserInfo | undefined => {
  try {
    const parsed = JSON.parse(storageEntry) as UserInfo;

    if (parsed.email && parsed.id && parsed.username) return parsed;
    return undefined;
  } catch {
    return undefined;
  }
};

/**
 * Generate initial auth state, based on whether there is JWT token saved in the localStorage or not
 */
const getInitialState = (): AuthContextState => {
  const localStorageToken = localStorage.getItem(config.localStorageAuthTokenKey);
  const localStorageUserInfo = localStorage.getItem(config.localStorageUserInfoKey);
  const userInfo = isUserInfoValid(localStorageUserInfo || '');

  if (localStorageToken && userInfo) {
    return {
      loggedIn: true,
      authToken: localStorageToken,
      userInfo,
    };
  } else {
    return unauthorizedState;
  }
};

export const AuthContextProvider: React.FC = ({ children }): JSX.Element => {
  const initialState = getInitialState();

  const [state, dispatch] = useReducer(reducer, initialState);

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};

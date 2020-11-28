import React, { Dispatch, useReducer } from 'react';
import { createContext } from 'react';
import config from '../config';

export interface AuthContextState {
  loggedIn: boolean;
  authToken?: string;
}

type AuthContextActionType = 'LOGIN' | 'LOGOUT';

export interface AuthContextActions {
  type: AuthContextActionType;
  payload?: Partial<AuthContextState>;
}

export interface AuthContextReducer {
  state: AuthContextState;
  dispatch: Dispatch<AuthContextActions>;
}

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

const getInitialState = (): AuthContextState => {
  const localStorageToken = localStorage.getItem(config.localStorageAuthTokenKey);

  if (localStorageToken) {
    return {
      loggedIn: true,
      authToken: localStorageToken,
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

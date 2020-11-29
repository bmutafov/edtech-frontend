import { Dispatch } from 'react';

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

import { Dispatch } from 'react';

export interface UserInfo {
  username: string;
  email: string;
  id: string;
}

export interface AuthContextState {
  loggedIn: boolean;
  authToken?: string;
  userInfo?: UserInfo;
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

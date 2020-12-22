import { AuthActions, LoginInfo, RegisterInfo, ResponseData } from './useAuthActions.types';
import { AuthContext } from './AuthContext';
import { useContext } from 'react';
import usePostRequest from '../hooks/usePostRequest';
import config from '../config/config';
import { AuthContextState, UserInfo } from './AuthContext.types';
import { AxiosResponse } from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getPayload = (result: AxiosResponse<any>): AuthContextState => {
  const authToken: string = result.data.jwt;

  const userInfo: UserInfo = {
    username: result?.data.user.username,
    email: result?.data.user.email,
    id: result?.data.user.id,
  };

  const payload: AuthContextState = {
    loggedIn: true,
    authToken,
    userInfo,
  };

  return payload;
};

const setLocalStorage = (authToken: string, userInfo: UserInfo) => {
  localStorage.setItem(config.localStorageAuthTokenKey, authToken);
  localStorage.setItem(config.localStorageUserInfoKey, JSON.stringify(userInfo));
};

const useAuthActions = (): AuthActions => {
  const { dispatch } = useContext(AuthContext);

  const [httpLogin, { loading: loadingLogin }] = usePostRequest<LoginInfo>('/auth/local', true);
  const [httpRegister, { loading: loadingRegister }] = usePostRequest<RegisterInfo>('/auth/local/register', true);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAuthAction = (response: AxiosResponse<any> | null): ResponseData => {
    if (!response || response?.status < 200 || response?.status > 300 || !response.data.jwt || !response.data.user) {
      return { success: false, message: response?.data.message[0].messages[0].message || 'Service unavailable' };
    }

    try {
      const payload = getPayload(response);
      setLocalStorage(payload.authToken as string, payload.userInfo as UserInfo);

      dispatch({ type: 'LOGIN', payload });
      return { success: true };
    } catch {
      return { success: false, message: 'Service unavailable' };
    }
  };

  const login = async (loginInfo: LoginInfo): Promise<ResponseData> => {
    const result = await httpLogin(loginInfo);
    return handleAuthAction(result);
  };

  const register = async (registerInfo: RegisterInfo): Promise<ResponseData> => {
    const result = await httpRegister(registerInfo);
    return handleAuthAction(result);
  };

  const logout = () => {
    localStorage.removeItem(config.localStorageAuthTokenKey);

    dispatch({ type: 'LOGOUT' });
  };

  return {
    login: {
      call: login,
      loading: loadingLogin,
    },
    register: {
      call: register,
      loading: loadingRegister,
    },
    logout,
  };
};

export default useAuthActions;

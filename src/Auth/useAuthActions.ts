import { AuthActions, LoginInfo, RegisterInfo, ResponseData } from './useAuthActions.types';
import { AuthContext } from './AuthContext';
import { useContext } from 'react';
import usePostRequest from '../hooks/usePostRequest';
import config from '../config';
import { AuthContextState, UserInfo } from './AuthContext.types';

const useAuthActions = (): AuthActions => {
  const { dispatch } = useContext(AuthContext);

  const [httpLogin, { loading: loadingLogin }] = usePostRequest<LoginInfo>('/auth/local');
  const [httpRegister, { loading: loadingRegister }] = usePostRequest<RegisterInfo>('/auth/local/register');

  const attemptLogin = async (loginInfo: LoginInfo): Promise<ResponseData> => {
    const result = await httpLogin(loginInfo);

    if (result && result.status >= 400) {
      return { success: false, message: result.data.message[0].messages[0].message };
    }

    const authToken = result?.data.jwt;

    const userInfo: UserInfo = {
      username: result?.data.user.username,
      email: result?.data.user.email,
      id: result?.data.user.id,
    };

    localStorage.setItem(config.localStorageAuthTokenKey, authToken);
    localStorage.setItem(config.localStorageUserInfoKey, JSON.stringify(userInfo));

    const payload: AuthContextState = {
      loggedIn: true,
      authToken,
      userInfo,
    };
    dispatch({ type: 'LOGIN', payload });
    return { success: true };
  };

  const register = async (registerInfo: RegisterInfo) => {
    const result = await httpRegister(registerInfo);

    //TODO: Validate response

    const payload: AuthContextState = {
      loggedIn: true,
      authToken: 'test',
    };
    dispatch({ type: 'LOGIN', payload });
  };

  const logout = () => {
    localStorage.removeItem(config.localStorageAuthTokenKey);

    dispatch({ type: 'LOGOUT' });
  };

  return {
    attemptLogin: {
      call: attemptLogin,
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

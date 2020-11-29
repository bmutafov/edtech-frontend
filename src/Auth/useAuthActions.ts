import { AuthActions, LoginInfo, RegisterInfo } from './useAuthActions.types';
import { AuthContext } from './AuthContext';
import { useContext } from 'react';
import usePostRequest from '../hooks/usePostRequest';
import config from '../config';
import { AuthContextState } from './AuthContext.types';

const useAuthActions = (): AuthActions => {
  const { dispatch } = useContext(AuthContext);

  const [httpLogin, { loading: loadingLogin }] = usePostRequest<LoginInfo>('/auth/local');
  const [httpRegister, { loading: loadingRegister }] = usePostRequest<RegisterInfo>('/auth/local/register');

  const attemptLogin = async (loginInfo: LoginInfo) => {
    const result = await httpLogin(loginInfo);

    // TODO: Confirm login successfull
    const authToken = 'jwttoken';

    localStorage.setItem(config.localStorageAuthTokenKey, authToken);

    const payload: AuthContextState = {
      loggedIn: true,
      authToken,
    };
    dispatch({ type: 'LOGIN', payload });
  };

  const register = async (registerInfo: RegisterInfo) => {
    const result = await httpRegister(registerInfo);

    //TODO: Confirm register successfull

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

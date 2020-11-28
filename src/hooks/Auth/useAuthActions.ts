import { LoginInfo } from './useAuthActions.types';
import { AuthContext, AuthContextState } from '../../contexts/AuthContext';
import { useContext } from 'react';
import usePostRequest from '../usePostRequest';
import config from '../../config';

const useAuthActions = () => {
  const { dispatch } = useContext(AuthContext);

  const [httpLogin, { loading: loadingLogin }] = usePostRequest<LoginInfo>('/users');

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

  const logout = () => {
    localStorage.removeItem(config.localStorageAuthTokenKey);

    dispatch({ type: 'LOGOUT' });
  };

  return {
    attemptLogin: {
      call: attemptLogin,
      loading: loadingLogin,
    },
    logout,
  };
};

export default useAuthActions;

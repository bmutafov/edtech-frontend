import { AuthContext } from './AuthContext';
import { useContext } from 'react';
import { AuthContextState } from './AuthContext.types';

const useAuthState = (): AuthContextState => {
  const { state } = useContext(AuthContext);

  return state;
};

export default useAuthState;

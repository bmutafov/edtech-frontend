import { AuthContext, AuthContextState } from './../../contexts/AuthContext';
import { useContext } from 'react';

const useAuthState = (): AuthContextState => {
  const { state } = useContext(AuthContext);

  return state;
};

export default useAuthState;

import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import useAuthActions from '../../../Auth/useAuthActions';
import useAuthState from '../../../Auth/useAuthState';
import useSnackbar from '../../../hooks/useSnackbar';
import useTexts from '../../../hooks/useTexts';

const NavBarUserActions: React.FC = () => {
  const history = useHistory();
  const texts = useTexts();
  const [snackBarComponent, openSnackbar] = useSnackbar({ severity: 'success' });

  const authState = useAuthState();
  const { logout } = useAuthActions();
  const { loggedIn } = authState;

  const handleLogout = () => {
    logout();
    openSnackbar(texts.navBarUserActionsLogoutSnackbarText);
  };

  const handleLogin = () => {
    history.push('/login');
  };

  return (
    <>
      {snackBarComponent}
      {loggedIn ? (
        <Button color="inherit" onClick={handleLogout}>
          {texts.navBarUserActionsLogout}
        </Button>
      ) : (
        <Button color="inherit" onClick={handleLogin}>
          {texts.navBarUserActionsLogin}
        </Button>
      )}
    </>
  );
};

export default NavBarUserActions;

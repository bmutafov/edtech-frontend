import { Box, Button } from '@material-ui/core';
import React, { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import useAuthActions from '../../../Auth/useAuthActions';
import useAuthState from '../../../Auth/useAuthState';
import useSnackbar from '../../../hooks/useSnackbar';
import useTexts from '../../../hooks/useTexts';

const NavBarUserActions: React.FC = () => {
  const history = useHistory();
  const texts = useTexts();
  const [snackBarComponent, openSnackbar] = useSnackbar({ severity: 'success' });

  const { loggedIn, userInfo } = useAuthState();
  const { logout } = useAuthActions();

  const handleLogout = useCallback(() => {
    logout();
    openSnackbar(texts.navBarUserActionsLogoutSnackbarText);
  }, [logout, openSnackbar, texts.navBarUserActionsLogoutSnackbarText]);

  const handleLogin = useCallback(() => {
    history.push('/login');
  }, [history]);

  const loggedInContent = useMemo(
    () => (
      <Box>
        Logged in as: {userInfo?.username}
        <Button color="inherit" onClick={handleLogout}>
          {texts.navBarUserActionsLogout}
        </Button>
      </Box>
    ),
    [handleLogout, texts.navBarUserActionsLogout, userInfo?.username]
  );

  const loggedOutContent = useMemo(
    () => (
      <Button color="inherit" onClick={handleLogin}>
        {texts.navBarUserActionsLogin}
      </Button>
    ),
    [handleLogin, texts.navBarUserActionsLogin]
  );

  return (
    <>
      {snackBarComponent}
      {loggedIn ? loggedInContent : loggedOutContent}
    </>
  );
};

export default NavBarUserActions;

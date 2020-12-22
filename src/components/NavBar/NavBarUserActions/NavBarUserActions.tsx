import { Box, Button } from '@material-ui/core';
import React, { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import useAuthActions from '../../../Auth/useAuthActions';
import useAuthState from '../../../Auth/useAuthState';
import useSnackbar from '../../../hooks/useSnackbar';
import useTexts from '../../../hooks/useTexts';
import { theme } from '../../../utils/theme';

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

  const handleRegister = useCallback(() => {
    history.push('/register');
  }, [history]);

  const loggedInContent = useMemo(
    () => (
      <Box>
        Logged in as: {userInfo?.username}
        <Button color="secondary" variant="outlined" onClick={handleLogout}>
          {texts.navBarUserActionsLogout}
        </Button>
      </Box>
    ),
    [handleLogout, texts.navBarUserActionsLogout, userInfo?.username]
  );

  const loggedOutContent = useMemo(
    () => (
      <Box display="flex" flexDirection="row">
        <Button color="inherit" onClick={handleRegister}>
          {texts.navBarUserActionsSignUp}
        </Button>
        <Box marginLeft={theme.spacing.$2}>
          <Button color="secondary" variant="outlined" onClick={handleLogin}>
            {texts.navBarUserActionsLogin}
          </Button>
        </Box>
      </Box>
    ),
    [handleLogin, handleRegister, texts.navBarUserActionsLogin, texts.navBarUserActionsSignUp]
  );

  return (
    <>
      {snackBarComponent}
      {loggedIn ? loggedInContent : loggedOutContent}
    </>
  );
};

export default NavBarUserActions;

import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Popover,
} from '@material-ui/core';
import { EmojiPeople, ExitToApp, PersonAdd } from '@material-ui/icons';
import PopupState, { bindPopover, bindTrigger } from 'material-ui-popup-state';
import React, { useCallback, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useAuthActions from '../../../Auth/useAuthActions';
import useAuthState from '../../../Auth/useAuthState';
import useSnackbar from '../../../hooks/useSnackbar';
import useTexts from '../../../hooks/useTexts';
import { theme } from '../../../utils/theme';
import Login from '../../LoginForm';
import RegisterForm from '../../RegisterForm';
import ModalForm from './ModalForm/ModalForm';

const NavBarUserActions: React.FC = () => {
  const texts = useTexts();
  const history = useHistory();
  const [snackBarComponent, openSnackbar] = useSnackbar({ severity: 'success' });
  const { loggedIn, userInfo } = useAuthState();
  const { logout } = useAuthActions();

  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
  const [isRegisterDialogOpen, setIsRegisterDialogOpen] = useState(false);

  const handleSwitchToRegister = useCallback(() => {
    setIsLoginDialogOpen(false);
    setIsRegisterDialogOpen(true);
  }, []);

  const handleLogout = useCallback(() => {
    logout();
    setIsLogoutDialogOpen(false);
    openSnackbar(texts.navBarUserActionsLogoutSnackbarText);
  }, [logout, openSnackbar, texts.navBarUserActionsLogoutSnackbarText]);

  const handleRedirect = useCallback(
    (path: string) => {
      history.push(path);
    },
    [history]
  );

  const confirmLogoutDialog = useMemo(() => {
    return (
      <Dialog open={isLogoutDialogOpen} onClose={() => setIsLogoutDialogOpen(false)}>
        <DialogTitle>{texts.navBarUserActionsConfirmLogoutTitle}</DialogTitle>
        <DialogActions>
          <Button onClick={() => setIsLogoutDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleLogout} color="secondary" variant="contained" disableElevation autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    );
  }, [handleLogout, isLogoutDialogOpen, texts.navBarUserActionsConfirmLogoutTitle]);

  const loggedInContent = useMemo(
    () => (
      <Box display="flex" alignItems="center">
        <PopupState variant="popover" popupId="demo-popup-popover">
          {(popupState) => (
            <>
              <Avatar style={{ cursor: 'pointer' }} {...bindTrigger(popupState)}>
                {userInfo?.username.charAt(0).toUpperCase()}
              </Avatar>
              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <List style={{ width: 300 }} component="nav" aria-label="secondary mailbox folders">
                  <ListSubheader component="div" id="nested-list-subheader">
                    <b>{texts.navBarUserActionsLoggedInAsText}</b> {userInfo?.username}
                  </ListSubheader>
                  <ListItem button>
                    <ListItemText primary="Add product" onClick={() => handleRedirect('/products/new')} />
                  </ListItem>
                </List>
              </Popover>
            </>
          )}
        </PopupState>
        <Box marginLeft={theme.spacing.$1}>
          <IconButton color="secondary" onClick={() => setIsLogoutDialogOpen(true)}>
            <ExitToApp />
          </IconButton>
        </Box>
      </Box>
    ),
    [handleRedirect, texts.navBarUserActionsLoggedInAsText, userInfo?.username]
  );

  const loggedOutContent = useMemo(
    () => (
      <Box display="flex" flexDirection="row">
        <Button color="inherit" onClick={() => setIsRegisterDialogOpen(true)}>
          {texts.navBarUserActionsSignUp}
        </Button>
        <Box marginLeft={theme.spacing.$2}>
          <Button color="secondary" variant="outlined" onClick={() => setIsLoginDialogOpen(true)}>
            {texts.navBarUserActionsLogin}
          </Button>
        </Box>
      </Box>
    ),
    [texts.navBarUserActionsLogin, texts.navBarUserActionsSignUp]
  );

  return (
    <>
      {confirmLogoutDialog}
      <ModalForm
        isOpen={isLoginDialogOpen}
        onClose={() => setIsLoginDialogOpen(false)}
        sectionTitle={texts.navBarUserActionsSectionTitleLogin}
        sidebarIcon={<EmojiPeople style={{ fontSize: 160 }} />}
        sidebarTitle={texts.navBarUserActionsLoginModalSidebarTitle}
        sidebarDescription={texts.navBarUserActionsLoginModalSidebarDescription}
      >
        <Login onRegisterClick={handleSwitchToRegister} onSuccess={() => setIsLoginDialogOpen(false)} />
      </ModalForm>
      <ModalForm
        isOpen={isRegisterDialogOpen}
        onClose={() => setIsRegisterDialogOpen(false)}
        sectionTitle={texts.navBarUserActionsSectionTitleRegister}
        sidebarIcon={<PersonAdd style={{ fontSize: 160 }} />}
        sidebarTitle={texts.navBarUserActionsRegisterModalSidebarTitle}
        sidebarDescription={texts.navBarUserActionsRegisterModalSidebarDescription}
        maxWidth="lg"
      >
        <RegisterForm onSuccess={() => setIsRegisterDialogOpen(false)} />
      </ModalForm>
      {snackBarComponent}
      {loggedIn ? loggedInContent : loggedOutContent}
    </>
  );
};

export default NavBarUserActions;

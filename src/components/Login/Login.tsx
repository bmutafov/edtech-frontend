import React, { useMemo } from 'react';
import { TextField, InputAdornment, Box, Button, LinearProgress } from '@material-ui/core';
import { AccountCircle, Lock } from '@material-ui/icons';
import { theme } from '../../utils/theme';
import useAuthActions from '../../Auth/useAuthActions';
import { useHistory } from 'react-router-dom';
import useTexts from '../../hooks/useTexts';

const Login: React.FC = () => {
  const history = useHistory();
  const texts = useTexts();
  const { attemptLogin } = useAuthActions();
  const { call: logIn, loading } = attemptLogin;

  const hadnleFormSubmit = async () => {
    //TODO: Replace this with actual values
    await logIn({ identifier: '123', password: '123' });
    history.push('/');
  };

  const loader = useMemo(
    () => (
      <Box marginBottom={theme.spacing.$2}>
        <LinearProgress />
      </Box>
    ),
    []
  );

  return (
    <Box margin={theme.spacing.$5} display="flex" flexDirection="column" width="300px">
      {loading && loader}
      <TextField
        required
        id="username"
        label={texts.loginPasswordLabel}
        variant="outlined"
        disabled={loading}
        placeholder={texts.loginPasswordPlaceholder}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        required
        id="password"
        label={texts.loginPasswordLabel}
        variant="outlined"
        disabled={loading}
        placeholder={texts.loginPasswordPlaceholder}
        autoComplete="current-password"
        type="password"
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          ),
        }}
      />
      <Box display="flex" flexDirection="row-reverse">
        <Button variant="contained" color="primary" onClick={hadnleFormSubmit} disabled={loading}>
          {texts.loginButtonText}
        </Button>
      </Box>
    </Box>
  );
};

export default Login;

import React, { useMemo, useState } from 'react';
import { TextField, InputAdornment, Box, Button, LinearProgress, Typography } from '@material-ui/core';
import { AccountCircle, Lock } from '@material-ui/icons';
import { theme } from '../../utils/theme';
import useAuthActions from '../../Auth/useAuthActions';
import { useHistory } from 'react-router-dom';
import useTexts from '../../hooks/useTexts';
import { Alert } from '@material-ui/lab';

const Login: React.FC = () => {
  const history = useHistory();
  const texts = useTexts();
  const { attemptLogin } = useAuthActions();
  const { call: logIn, loading } = attemptLogin;

  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<boolean | string>(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const hadnleFormSubmit = async () => {
    const result = await logIn({ identifier, password });
    if (result.success) {
      setLoginSuccess(true);

      setTimeout(() => {
        history.push('/');
      }, 2000);
    } else {
      setError(result.message);
    }
  };

  const handleIdentifierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setIdentifier(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setPassword(e.target.value);
  };

  const loader = useMemo(
    () => (
      <Box marginBottom={theme.spacing.$2}>
        <LinearProgress color={loginSuccess ? 'secondary' : 'primary'} />
      </Box>
    ),
    [loginSuccess]
  );

  return (
    <Box margin={theme.spacing.$5} display="flex" flexDirection="column" width="300px">
      {(loading || loginSuccess) && loader}
      {error && (
        <Box marginY={theme.spacing.$2}>
          <Alert severity="error">{error}</Alert>
        </Box>
      )}
      {loginSuccess && (
        <Box marginBottom={theme.spacing.$2}>
          <Alert severity="success">Sucessful login!</Alert>
        </Box>
      )}
      <TextField
        required
        id="username"
        label={texts.loginPasswordLabel}
        variant="outlined"
        disabled={loading}
        placeholder={texts.loginPasswordPlaceholder}
        onChange={handleIdentifierChange}
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
        onChange={handlePasswordChange}
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

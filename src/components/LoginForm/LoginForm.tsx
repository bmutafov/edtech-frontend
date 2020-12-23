import React, { useMemo, useState } from 'react';
import { TextField, InputAdornment, Box, Button, LinearProgress, Divider } from '@material-ui/core';
import { AccountCircle, Lock } from '@material-ui/icons';
import { theme } from '../../utils/theme';
import useAuthActions from '../../Auth/useAuthActions';
import useTexts from '../../hooks/useTexts';
import { Alert } from '@material-ui/lab';
import { useForm } from 'react-hook-form';
import config from '../../config/config';
import useSnackbar from '../../hooks/useSnackbar';

interface Inputs {
  username: string;
  password: string;
}

interface Props {
  onSuccess?: () => void;
  onRegisterClick: () => void;
}

const Login: React.FC<Props> = ({ onSuccess, onRegisterClick }) => {
  const [snackBarComponent, openSnackbar] = useSnackbar({ severity: 'success' });
  const texts = useTexts();
  const { login } = useAuthActions();
  const { call: callLogin, loading } = login;

  const [error, setError] = useState<boolean | string>(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const { register, handleSubmit, errors } = useForm<Inputs>();

  const hadnleFormSubmit = async ({ username, password }: Inputs) => {
    setError(false);
    const result = await callLogin({ identifier: username, password });

    if (result.success) {
      setLoginSuccess(true);

      setTimeout(() => {
        if (onSuccess) onSuccess();
        openSnackbar('Successfully logged in');
      }, config.afterLoginRedirectTime);
    } else {
      setError(result.message);
    }
  };

  const handleRedirectToRegister = () => {
    onRegisterClick();
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
    <>
      {snackBarComponent}
      <Box paddingX={theme.spacing.$5} display="flex" flexDirection="column">
        {(loading || loginSuccess) && loader}
        {error && (
          <Box marginY={theme.spacing.$2}>
            <Alert severity="error">{error}</Alert>
          </Box>
        )}
        {loginSuccess && (
          <Box marginBottom={theme.spacing.$2}>
            <Alert severity="success">{texts.loginSuccessfullText}</Alert>
          </Box>
        )}
        <form onSubmit={handleSubmit(hadnleFormSubmit)}>
          <TextField
            variant="outlined"
            id="username"
            name="username"
            inputRef={register({
              required: texts.loginErrorFieldRequired,
            })}
            label={texts.loginUsernameLabel}
            placeholder={texts.loginUsernamePlaceholder}
            helperText={errors.username && errors.username.message}
            disabled={loading}
            error={!!errors.username}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="outlined"
            id="password"
            name="password"
            type="password"
            inputRef={register({
              required: texts.loginErrorFieldRequired,
              minLength: { value: 6, message: texts.loginErrorMinLength },
            })}
            label={texts.loginPasswordLabel}
            placeholder={texts.loginPasswordPlaceholder}
            helperText={errors.password && errors.password.message}
            disabled={loading}
            error={!!errors.password}
            margin="normal"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
            }}
          />
          <Box display="flex" justifyContent="flex-end">
            <Button variant="contained" color="primary" disabled={loading} type="submit" disableElevation>
              {texts.loginButtonText}
            </Button>
          </Box>
        </form>
      </Box>
      <Box marginY={theme.spacing.$4}>
        <Divider />
      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-between" marginX={theme.spacing.$5}>
        no account yet?
        <Button color="secondary" onClick={handleRedirectToRegister}>
          {texts.loginCreateAccountButton}
        </Button>
      </Box>
    </>
  );
};

export default Login;

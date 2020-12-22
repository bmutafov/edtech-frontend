import React, { useMemo, useState } from 'react';
import { TextField, InputAdornment, Box, Button, LinearProgress } from '@material-ui/core';
import { AccountCircle, Lock, Email } from '@material-ui/icons';
import { theme } from '../../utils/theme';
import useAuthActions from '../../Auth/useAuthActions';
import { useHistory } from 'react-router-dom';
import useTexts from '../../hooks/useTexts';
import { Alert } from '@material-ui/lab';
import { useForm } from 'react-hook-form';
import config from '../../config/config';

interface Inputs {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const EMAIL_VALIDATION_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const RegisterForm: React.FC = () => {
  const history = useHistory();
  const texts = useTexts();
  const { register: userRegister } = useAuthActions();
  const { call: httpRegister, loading } = userRegister;

  const [error, setError] = useState<boolean | string>(false);
  const [registerSuccess, setLoginSuccess] = useState(false);

  const { register, handleSubmit, errors, watch } = useForm<Inputs>();

  const hadnleFormSubmit = async ({ email, username, password }: Inputs) => {
    setError(false);
    const result = await httpRegister({ email, username, password });

    if (result.success) {
      setLoginSuccess(true);

      setTimeout(() => {
        history.push('/');
      }, config.afterLoginRedirectTime);
    } else {
      setError(result.message);
    }
  };

  const loader = useMemo(
    () => (
      <Box marginBottom={theme.spacing.$2}>
        <LinearProgress color={registerSuccess ? 'secondary' : 'primary'} />
      </Box>
    ),
    [registerSuccess]
  );

  return (
    <Box margin={theme.spacing.$5} display="flex" flexDirection="column" width="300px">
      {(loading || registerSuccess) && loader}
      {error && (
        <Box marginY={theme.spacing.$2}>
          <Alert severity="error">{error}</Alert>
        </Box>
      )}
      {registerSuccess && (
        <Box marginBottom={theme.spacing.$2}>
          <Alert severity="success">{texts.registerSuccessfullText}</Alert>
        </Box>
      )}
      <form onSubmit={handleSubmit(hadnleFormSubmit)}>
        <TextField
          variant="outlined"
          id="email"
          name="email"
          inputRef={register({
            required: texts.registerErrorFieldRequired,
            pattern: {
              value: EMAIL_VALIDATION_REGEX,
              message: texts.registerErrorEmailNotValid,
            },
          })}
          label={texts.registerEmailLabel}
          placeholder={texts.registerEmailPlaceholder}
          helperText={errors.email && errors.email.message}
          disabled={loading}
          error={!!errors.email || !!error}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          variant="outlined"
          id="username"
          name="username"
          inputRef={register({
            required: texts.registerErrorFieldRequired,
          })}
          label={texts.registerUsernameLabel}
          placeholder={texts.registerUsernamePlaceholder}
          helperText={errors.username && errors.username.message}
          disabled={loading}
          error={!!errors.username || !!error}
          margin="normal"
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
            required: texts.registerErrorFieldRequired,
            minLength: { value: 6, message: texts.registerErrorMinLength },
          })}
          label={texts.registerPasswordLabel}
          placeholder={texts.registerPasswordPlaceholder}
          helperText={errors.password && errors.password.message}
          disabled={loading}
          error={!!errors.password || !!error}
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
        <TextField
          variant="outlined"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          inputRef={register({
            required: texts.registerErrorFieldRequired,
            minLength: { value: 6, message: texts.registerErrorMinLength },
            validate: (value) => value === watch('password') || texts.registerErrorPasswordMatch,
          })}
          label={texts.registerConfirmPasswordLabel}
          placeholder={texts.registerConfirmPasswordPlaceholder}
          helperText={errors.confirmPassword && errors.confirmPassword.message}
          disabled={loading}
          error={!!errors.confirmPassword || !!error}
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
          <Button variant="contained" color="primary" disabled={loading} type="submit">
            {texts.registerButtonText}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default RegisterForm;

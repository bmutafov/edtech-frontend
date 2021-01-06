import React, { useMemo, useState } from 'react';
import { TextField, InputAdornment, Box, Button, LinearProgress, Divider, MenuItem } from '@material-ui/core';
import { AccountCircle, Lock, Email, Phone, Language, Room } from '@material-ui/icons';
import { theme } from '../../utils/theme';
import useAuthActions from '../../Auth/useAuthActions';
import useTexts from '../../hooks/useTexts';
import { Alert } from '@material-ui/lab';
import { useForm } from 'react-hook-form';
import config from '../../config/config';
import useResponsive from '../../hooks/useResponsive';
import { countryList } from '../CountryList/countryList';

const EMAIL_VALIDATION_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

interface Inputs {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  companyname: string;
  number: string;
  location: string;
  website: string;
}

interface Props {
  onSuccess?: () => void;
}

const RegisterFormCompany: React.FC<Props> = ({ onSuccess }) => {
  const countrylist = countryList.map((country) => (
    <MenuItem key={country} value={country}>
      {country}
    </MenuItem>
  ));
  const texts = useTexts();
  const { register: userRegister } = useAuthActions();
  const { call: httpRegister, loading } = userRegister;
  const { isTabletOrMobile } = useResponsive();

  const [error, setError] = useState<boolean | string>(false);
  const [registerSuccess, setLoginSuccess] = useState(false);
  const [selectedRole, setSelectedLocation] = useState<string>('Netherlands');

  const { register, handleSubmit, setValue, errors, watch } = useForm<Inputs>();

  const handleFormSubmit = async (inputs: Inputs) => {
    const { email, username, password } = inputs;
    setError(false);

    const result = await httpRegister({ email, username, password });

    if (result.success) {
      setLoginSuccess(true);

      setTimeout(() => {
        if (onSuccess) onSuccess();
      }, config.afterLoginRedirectTime);
    } else {
      setError(result.message);
    }
  };
  const handleLocationSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string;
    setSelectedLocation(value);
    setValue('location', value);
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
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Box display="flex" flexDirection={isTabletOrMobile ? 'column' : 'row'}>
        <Box paddingX={theme.spacing.$5} display="flex" flexDirection="column" flex={1}>
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
            label={texts.registerCompanyEmailLabel}
            placeholder={texts.registerCompanyEmailPlaceholder}
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
            label={texts.registerCompanyPasswordLabel}
            placeholder={texts.registerCompanyPasswordPlaceholder}
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
            label={texts.registerCompanyConfirmPasswordLabel}
            placeholder={texts.registerCompanyConfirmPasswordPlaceholder}
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
        </Box>
        <Box marginY={isTabletOrMobile ? theme.spacing.$4 : theme.spacing.$10}>
          <Divider orientation={isTabletOrMobile ? 'horizontal' : 'vertical'} />
        </Box>
        <Box paddingX={theme.spacing.$5} display="flex" flexDirection="column" flex={1}>
          <TextField
            variant="outlined"
            id="name"
            name="name"
            inputRef={register({
              required: texts.registerErrorFieldRequired,
            })}
            label={texts.registerCompanyNameLabel}
            placeholder={texts.registerCompanyNamePlaceholder}
            helperText={errors.companyname && errors.companyname.message}
            disabled={loading}
            error={!!errors.companyname || !!error}
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
            id="number"
            name="number"
            inputRef={register()}
            label={texts.registerCompanyNumberLabel}
            placeholder={texts.registerCompanyNumberPlaceholder}
            helperText={errors.number && errors.number.message}
            disabled={loading}
            error={!!errors.number || !!error}
            margin="normal"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Phone />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            select
            variant="outlined"
            id="location"
            name="location"
            value={selectedRole}
            onChange={handleLocationSelect}
            label={texts.registerCompanyLocationLabel}
            placeholder={texts.registerCompanyLocationPlaceholder}
            helperText={errors.location && errors.location.message}
            disabled={loading}
            error={!!errors.location || !!error}
            margin="normal"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Room />
                </InputAdornment>
              ),
            }}
          >
            {countrylist}
          </TextField>
          <TextField
            variant="outlined"
            id="website"
            name="website"
            inputRef={register()}
            label={texts.registerCompanyWebsiteLabel}
            placeholder={texts.registerCompanyWebsitePlaceholder}
            helperText={errors.website && errors.website.message}
            disabled={loading}
            error={!!errors.website || !!error}
            margin="normal"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Language />
                </InputAdornment>
              ),
            }}
          />
          <Box display="flex" justifyContent="flex-end">
            <Button variant="contained" color="primary" disabled={loading} type="submit" disableElevation>
              {texts.registerButtonText}
            </Button>
          </Box>
        </Box>
      </Box>
    </form>
  );
};
export default RegisterFormCompany;

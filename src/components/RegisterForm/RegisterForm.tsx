import React, { useMemo, useState } from 'react';
import { TextField, InputAdornment, Box, Button, LinearProgress, Divider, MenuItem } from '@material-ui/core';
import { AccountCircle, Lock, Email, Phone, AccountBalance, Work } from '@material-ui/icons';
import { theme } from '../../utils/theme';
import useAuthActions from '../../Auth/useAuthActions';
import useTexts from '../../hooks/useTexts';
import { Alert } from '@material-ui/lab';
import { useForm } from 'react-hook-form';
import config from '../../config/config';
import useResponsive from '../../hooks/useResponsive';

const EMAIL_VALIDATION_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PHONE_VALIDATION_REGEX = /^([0-9]| |\+)*$/;

enum EducationalRole {
  TEACHER = 'teacher',
  STUDENT = 'student',
}

interface Inputs {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  name: string;
  number: string;
  institute: string;
  role: EducationalRole;
}

interface Props {
  onSuccess?: () => void;
}

const RegisterForm: React.FC<Props> = ({ onSuccess }) => {
  const texts = useTexts();
  const { register: userRegister } = useAuthActions();
  const { call: httpRegister, loading } = userRegister;
  const { isTabletOrMobile } = useResponsive();

  const [error, setError] = useState<boolean | string>(false);
  const [registerSuccess, setLoginSuccess] = useState(false);
  const [selectedRole, setSelectedRole] = useState<EducationalRole>(EducationalRole.STUDENT);

  const { register, handleSubmit, setValue, errors, watch } = useForm<Inputs>();

  const hadnleFormSubmit = async (inputs: Inputs) => {
    const { email, username, password, name, number, institute } = inputs;
    setError(false);

    const result = await httpRegister({
      email,
      username,
      password,
      name,
      number,
      institute,
      educationalRole: selectedRole,
    });

    if (result.success) {
      setLoginSuccess(true);

      setTimeout(() => {
        if (onSuccess) onSuccess();
      }, config.afterLoginRedirectTime);
    } else {
      setError(result.message);
    }
  };

  const handleRoleSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as EducationalRole;
    setSelectedRole(value);
    setValue('role', value);
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
    <form onSubmit={handleSubmit(hadnleFormSubmit)}>
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
            label={texts.registerNameLabel}
            placeholder={texts.registerNamePlaceholder}
            helperText={errors.name && errors.name.message}
            disabled={loading}
            error={!!errors.name || !!error}
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
            inputRef={register({
              pattern: {
                value: PHONE_VALIDATION_REGEX,
                message: texts.registerErrorPhonePattern,
              },
              maxLength: {
                value: 15,
                message: texts.registerErrorPhoneLength,
              },
            })}
            label={texts.registerNumberLabel}
            placeholder={texts.registerNumberPlaceholder}
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
            id="role"
            name="role"
            value={selectedRole}
            onChange={handleRoleSelect}
            label={texts.registerRoleLabel}
            placeholder={texts.registerRolePlaceholder}
            helperText={errors.role && errors.role.message}
            disabled={loading}
            error={!!errors.role || !!error}
            margin="normal"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Work />
                </InputAdornment>
              ),
            }}
          >
            <MenuItem value={EducationalRole.STUDENT}>Student</MenuItem>
            <MenuItem value={EducationalRole.TEACHER}>Teacher</MenuItem>
          </TextField>

          <TextField
            variant="outlined"
            id="institute"
            name="institute"
            inputRef={register({
              required: texts.registerErrorFieldRequired,
            })}
            label={texts.registerInstituteLabel}
            placeholder={texts.registerInstitutePlaceholder}
            helperText={errors.institute && errors.institute.message}
            disabled={loading}
            error={!!errors.institute || !!error}
            margin="normal"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountBalance />
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

export default RegisterForm;

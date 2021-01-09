import { InputAdornment, TextField } from '@material-ui/core';
import React from 'react';
import { ErrorType } from './FormBuilder.types';

export interface TextInputProps {
  id: string;
  label: string;
  placeholder?: string;
  error?: ErrorType;
  disabled?: boolean;
  icon?: JSX.Element;
  onChange: (id: string, value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ id, label, placeholder, error, disabled, icon, onChange }) => {
  const inputProps = icon
    ? {
        startAdornment: <InputAdornment position="start">{icon}</InputAdornment>,
      }
    : undefined;

  const hasError = error && id in error ? error[id] : undefined;

  return (
    <TextField
      variant="outlined"
      id={id}
      name={id}
      label={label}
      placeholder={placeholder}
      helperText={hasError && hasError.message}
      disabled={disabled}
      error={!!hasError}
      fullWidth
      InputProps={inputProps}
      margin="normal"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(id, e.target.value)}
    />
  );
};

export default TextInput;

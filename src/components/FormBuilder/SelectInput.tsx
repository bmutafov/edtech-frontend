import { InputAdornment, MenuItem, TextField } from '@material-ui/core';
import React from 'react';
import { FormBuilderOptions } from './FormBuilder';
import { MenuItem as MenuItemType } from './FormBuilder.types';

interface SelectInputProps {
  id: string;
  label?: string;
  menuItems?: MenuItemType[];
  onChange: (id: string, value: string) => void;
  value: string;
  options?: FormBuilderOptions;
  disabled?: boolean;
  icon?: JSX.Element;
}

const SelectInput: React.FC<SelectInputProps> = ({
  id,
  label,
  menuItems,
  onChange,
  value,
  options,
  icon,
  disabled = false,
}) => {
  const inputProps = icon
    ? {
        startAdornment: <InputAdornment position="start">{icon}</InputAdornment>,
      }
    : undefined;

  return (
    <TextField
      select
      label={label}
      id={id}
      fullWidth
      disabled={disabled}
      variant="outlined"
      value={value || ''}
      InputProps={inputProps}
      onChange={(event: React.ChangeEvent<{ value: unknown }>) => onChange(id, event.target.value as string)}
      style={{
        marginBottom: options?.spacing || 0,
      }}
    >
      <MenuItem value="">None</MenuItem>
      {menuItems?.map((item) => (
        <MenuItem value={item.value} key={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectInput;

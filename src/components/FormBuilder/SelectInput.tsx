import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import { MenuItem as MenuItemType } from './FormBuilder.types';

interface SelectInputProps {
  id: string;
  label: string;
  menuItems?: MenuItemType[];
  onChange: (id: string, value: string) => void;
  value: string;
}

const SelectInput: React.FC<SelectInputProps> = ({ id, label, menuItems, onChange, value }) => {
  return (
    <FormControl variant="outlined" style={{ width: '100%' }}>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={id}
        id={id}
        fullWidth
        value={value || ''}
        onChange={(event: React.ChangeEvent<{ value: unknown }>) => onChange(id, event.target.value as string)}
        label={label}
      >
        <MenuItem value="">None</MenuItem>
        {menuItems?.map((item) => (
          <MenuItem value={item.value} key={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;

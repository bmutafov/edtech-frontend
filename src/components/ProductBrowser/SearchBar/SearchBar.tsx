import React, { useState } from 'react';
import { IconButton, TextField } from '@material-ui/core';
import { Close, Search } from '@material-ui/icons';
import { useStyles } from './SearchBar.styles';

interface Props {
  onSubmit: (searchQuery: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSubmit }) => {
  const classes = useStyles();
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    onSubmit(value);
  };

  const handleReset = () => {
    setValue('');
    onSubmit('');
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'Enter') return;
    handleSubmit();
  };

  return (
    <TextField
      variant="outlined"
      className={classes.input}
      id="search-products"
      label="Search products.."
      type="search"
      fullWidth
      onKeyDown={onKeyDown}
      onChange={(e) => setValue(e.target.value)}
      value={value}
      InputProps={{
        endAdornment: (
          <>
            {value && (
              <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={handleReset}>
                <Close />
              </IconButton>
            )}
            <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={handleSubmit}>
              <Search />
            </IconButton>
          </>
        ),
      }}
    />
  );
};

export default SearchBar;

import React from 'react';
import { IconButton, TextField } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { useStyles } from './SearchBar.styles';

const SearchBar: React.FC = () => {
  const classes = useStyles();

  return (
    <TextField
      variant="outlined"
      className={classes.input}
      id="search-products"
      label="Search products.."
      type="search"
      fullWidth
      InputProps={{
        endAdornment: (
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <Search />
          </IconButton>
        ),
      }}
    />
  );
};

export default SearchBar;

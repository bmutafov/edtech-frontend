import React from 'react';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { useStyles } from './SearchBar.styles';

const SearchBar: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search Product"
        inputProps={{ 'aria-label': 'search product' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;

import { Box, CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { createContext } from 'react';
import config from '../config/config';
import useGetRequest from '../hooks/useGetRequest';
import defaultTexts from '../utils/defaultTexts';
import { theme } from '../utils/theme';

export type TextsScheme = typeof defaultTexts;

export const TextsContext = createContext<TextsScheme>(defaultTexts);

const useStyles = makeStyles({
  spinner: {
    position: 'absolute',
    width: '220px',
    height: '120px',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
});

export const TextsContextProvider: React.FC = ({ children }): JSX.Element => {
  const { data, loading } = useGetRequest<TextsScheme>(config.cmsTextsEndpoint);
  const classes = useStyles();

  if (loading) {
    return (
      <Box className={classes.spinner}>
        <CircularProgress size={120} />
        <Box marginTop={theme.spacing.$3}>
          <Typography variant="subtitle1">Loading website...</Typography>
        </Box>
      </Box>
    );
  }

  return <TextsContext.Provider value={{ ...defaultTexts, ...data }}>{children}</TextsContext.Provider>;
};

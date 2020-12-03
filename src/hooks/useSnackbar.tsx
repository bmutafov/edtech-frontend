import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useState } from 'react';

interface SnackbarOptions {
  severity: 'success' | 'info' | 'warning' | 'error' | undefined;
}

const useSnackbar = (options?: SnackbarOptions): [JSX.Element, (snackBarMessage: string) => void] => {
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);

  const openSnackbar = (snackBarMessage: string) => {
    setMessage(snackBarMessage);
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const snackBar = (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={options?.severity}>
        {message}
      </Alert>
    </Snackbar>
  );

  return [snackBar, openSnackbar];
};

export default useSnackbar;

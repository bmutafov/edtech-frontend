import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    labelWrapper: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: theme.spacing(1),
    },
    menuItemSelected: {
      background: '#f88ad0',
    },
    textField: {
      maxHeight: '200px',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      [theme.breakpoints.down('sm')]: {
        maxHeight: '1200px',
      },
    },
    fileInfoBox: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      gap: theme.spacing(1),
      background: '#fcfcfc',
      padding: theme.spacing(1),
      marginLeft: theme.spacing(1),
      justifyContent: 'space-between',
    },
    textBox: {},
    paper: {
      margin: 'auto',
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
  })
);

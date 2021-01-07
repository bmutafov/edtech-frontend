import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      background: '#fcfcfc',
      padding: theme.spacing(2),
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
      borderRadius: '5px',
    },
    flexWrap: {
      display: 'flex',
      gap: theme.spacing(2),
      width: '100%',
      height: '100%',
      flexWrap: 'wrap',
    },
    categoryChip: {
      display: 'flex',
      gap: theme.spacing(1),
      flexWrap: 'wrap',
    },
  })
);

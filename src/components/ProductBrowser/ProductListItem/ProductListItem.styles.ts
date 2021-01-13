import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      background: '#fcfcfc',
      padding: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    ratingText: {
      fontSize: '1rem',
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
      borderRadius: '5px',
      width: 150,
      height: 150,
      objectFit: 'cover',
      [theme.breakpoints.down('sm')]: {
        width: 80,
        height: 80,
      },
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

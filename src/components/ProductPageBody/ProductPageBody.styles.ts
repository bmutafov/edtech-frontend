import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(2),
    },
    details: {
      padding: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
    },
    button: {
      margin: theme.spacing(1),
      borderRadius: '5em',
    },
    content: {
      display: 'flex',
      flex: '1 0 auto',
    },
    icon: {
      color: 'white',
    },
    chipContainer: {
      display: 'flex',
      gap: theme.spacing(1),
      flexWrap: 'wrap',
      marginTop: theme.spacing(1),
    },
    card: {
      display: 'flex',
    },
    cover: {
      width: 100,
      height: 100,
    },
  })
);

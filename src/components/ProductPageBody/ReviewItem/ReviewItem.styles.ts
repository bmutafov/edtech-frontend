import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      marginTop: theme.spacing(1),
    },
    chipContainer: {
      display: 'flex',
      gap: theme.spacing(1),
      flexWrap: 'wrap',
      marginTop: theme.spacing(1),
    },
    listIcon: {
      marginRight: theme.spacing(1),
    },
    upperSection: {
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    treats: {
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(2),
      },
    },
  })
);

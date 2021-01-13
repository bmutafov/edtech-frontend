import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    subtitle: {
      fontWeight: 700,
      fontSize: '23px',
    },
    cardstyle: {
      [theme.breakpoints.down('sm')]: {
        width: '90%',
        height: 400,
        marginLeft: '5%',
        marginRight: '5%',
      },
      width: '40%',
      height: 400,
      marginLeft: '30%',
      marginRight: '30%',
    },
    subtitlewidth: {
      [theme.breakpoints.down('sm')]: {
        width: '90%',
      },
      width: '50%',
      padding: theme.spacing(3),
    },
    root: {
      flexGrow: 1,
      marginLeft: '10%',
      marginRight: '10%',
      marginBottom: '10%',
    },
    image: {
      padding: theme.spacing(3),
      width: '300px',
      height: 250,
      background: '#cccccc',
    },
  })
);

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.down('xl')]: {
        display: 'flex',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '4%',
        paddingLeft: '2%',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        marginLeft: '10px',
        marginRight: '10px',
        marginTop: '10px',
      },
      [theme.breakpoints.up('xl')]: {
        display: 'flex',
        marginLeft: '20%',
        marginRight: '20%',
        marginTop: '4%',
        paddingLeft: '2%',
      },
    },
    root1: {
      marginTop: '2%',
    },
    details: {
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
    card: {
      display: 'flex',
    },
    cover: {
      width: 100,
      height: 100,
    },
  })
);

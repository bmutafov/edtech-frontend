import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
    },
    container: {
      display: 'flex',
      gap: theme.spacing(3),
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    leftCol: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2),
    },
    rightCol: {
      flex: 5,
    },
    infoBox: {
      flex: 2,
    },
    ratingBox: {
      display: 'flex',
      gap: theme.spacing(2),
      alignItems: 'center',
    },
    categoryChip: {
      display: 'flex',
      gap: theme.spacing(1),
      flexWrap: 'wrap',
    },
    root1: {
      marginTop: '2%',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    button: {
      display: 'flex',
      alignSelf: 'flex-end',
      alignItems: 'flex-start',
      paddingTop: '10px',
      paddingLeft: '4%',
    },
    content: {
      display: 'flex',
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
      height: 140,
    },
    companyInfo: {
      display: 'flex',
      gap: theme.spacing(1),
      marginTop: theme.spacing(1),
      alignItems: 'center',
    },
  })
);

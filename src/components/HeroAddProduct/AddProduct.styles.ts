import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    textField: {
      width: 300,
      height: 40,
    },
    textBox: {
      width: 400,
    },
    paper: {
      margin: 'auto',
      marginTop: 50,
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      width: '60%',
    },
  })
);

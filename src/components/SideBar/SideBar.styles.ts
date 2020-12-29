import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      marginBottom: theme.spacing(2),
    },
    buttonBox: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: theme.spacing(2),
      background: '#fafafa',
      padding: theme.spacing(2),
    },
    filterTitle: {
      marginBottom: theme.spacing(3),
    },
  })
);

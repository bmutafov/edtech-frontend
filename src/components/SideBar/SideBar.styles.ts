import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // necessary for content to be below app bar
    sidenav: {
      toolbar: theme.mixins.toolbar,
      padding: theme.spacing(5),
    },
  })
);

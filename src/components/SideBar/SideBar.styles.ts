import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // necessary for content to be below app bar
    sidenav: {
      toolbar: theme.mixins.toolbar,
      padding: theme.spacing(5),
    },
  })
);

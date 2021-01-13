import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(15),
    },
    flexContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    emptyState: {
      display: 'block',
      alignSelf: 'center',
    },
    loaderWrapper: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
    },
    loader: {
      display: 'block',
      margin: `${theme.spacing(3)}px auto`,
    },
  })
);

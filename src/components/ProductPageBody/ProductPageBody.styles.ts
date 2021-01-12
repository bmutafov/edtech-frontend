import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    marginLeft: '20%',
    marginRight: '20%',
    marginTop: '4%',
    paddingLeft: '2%',
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
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height: 140,
  },
});

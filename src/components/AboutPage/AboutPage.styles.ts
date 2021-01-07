import { CenterFocusStrong } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  aboutBackground: {
    backgroundImage: 'linear-gradient(137deg, rgba(229,170,255,1) 0%, rgba(249,236,255,1) 100%)',
    backgroundSize: '400% 400%',
    animation: '$gradient 15s ease infinite',
  },
  '@keyframes gradient': {
    '0%': {
      backgroundPosition: '0% 50%',
    },
    '50%': {
      backgroundPosition: '100% 50%',
    },
    '100%': {
      backgroundPosition: '0% 50%',
    },
  },
  title: {
    fontSize: '44px',
    lineHeight: '56px',
    fontWeight: 700,
  },
  subtitle: {
    fontWeight: 700,
    fontSize: '23px',
  },
  cardstyle: {
    width: 700,
    height: 400,
    marginLeft: '300px',
  },
  subtitlewidth: {
    width: 600,
  },
  root: {
    maxWidth: 345,
  },
  image: {
    width: 400,
    height: 250,
    background: '#cccccc',
  },
});

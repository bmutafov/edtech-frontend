import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  icon: {
    color: '#722a8b',
  },
  sideSection: {
    background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(251,235,255,1) 100%)',
  },
  textGradient: {
    backgroundImage: 'linear-gradient(137deg, rgba(39,40,83,1) 0%, rgba(102,61,168,1) 45%, rgba(210,44,210,1) 100%)',
    backgroundSize: '400% 400%',
    animation: '$gradient 3s ease infinite',
    // height: '550px',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    '-moz-background-clip': 'text',
    '-moz-text-fill-color': 'transparent',
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
});

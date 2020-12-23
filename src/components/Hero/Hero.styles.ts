import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  heroBackground: {
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
  paper: {
    width: 110,
    height: 110,
    cursor: 'pointer',
  },
  ctaButton: {
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '12px 20px',
    '&:hover': {
      backgroundColor: '#f2f2f2',
    },
  },
  subtitle: {
    fontWeight: 700,
    fontSize: '14px',
  },
});

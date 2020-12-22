import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  paper: {
    transition: '0.3s',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.02)',
      cursor: 'pointer',
    },
  },
  image: {
    width: 150,
    height: 150,
    background: '#cccccc',
  },
  productTitle: {
    fontWeight: 400,
    fontSize: '18px',
  },
  productCategory: {
    fontWeight: 300,
    fontSize: '14px',
  },
});

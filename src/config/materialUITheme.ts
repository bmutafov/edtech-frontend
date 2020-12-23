import { createMuiTheme } from '@material-ui/core/styles';

const materialUITheme = createMuiTheme({
  palette: {
    primary: {
      main: '#272853',
    },
    secondary: {
      main: '#F61067',
    },
  },
  typography: {
    fontFamily: 'Mulish',
  },
});

export default materialUITheme;

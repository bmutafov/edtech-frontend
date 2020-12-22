import { createMuiTheme } from '@material-ui/core/styles';

const materialUITheme = createMuiTheme({
  palette: {
    primary: {
      main: '#272853',
    },
    secondary: {
      main: '#eed5f9',
    },
  },
  typography: {
    fontFamily: 'Mulish',
  },
});

export default materialUITheme;

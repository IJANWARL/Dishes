import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif'
  },
  overrides: {
    MuiInput: {
      root: {
        width: '100%'
      }
    }
  }
});

export default theme;

import { createMuiTheme } from '@material-ui/core';
import { lime, red } from '@material-ui/core/colors'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: lime['A400']
    },
    secondary: {
      main: red['500']
    },
    butthole: {
      main: red['500']
    }
  }
})

export default theme;
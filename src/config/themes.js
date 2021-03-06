import red from '@material-ui/core/colors/red'
import pink from '@material-ui/core/colors/pink'
import green from '@material-ui/core/colors/green'

const themes = [
  {
    id: 'default',
    color: '#17706E',
    source: {
      palette: {
        primary: {
          main: '#17706E'
        },
        secondary: {
          main: '#84B3B2'
        },
        error: red,
      },
    },
  },
  {
    id: 'red',
    color: red[500],
    source: {
      palette: {
        primary: red,
        secondary: pink,
        error: red,
      },
    },
  },
  {
    id: 'green',
    color: green[500],
    source: {
      palette: {
        primary: green,
        secondary: red,
        error: red,
      },
    },
  },
]

export default themes

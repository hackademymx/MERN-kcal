import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Loadable from 'react-loadable'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

import './global.css'

const App = Loadable({
  loader: () => import('./container/App'),
  loading: () => <div style={{ textAlign: 'center', marginTop: '5em' }}><CircularProgress /></div>,
})

const theme = createMuiTheme({
  typography: 16
})

const MyAwesomeREactComponent = ({ history }) => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <App history={history} />
    </Router>
  </MuiThemeProvider>
)

ReactDOM.render(
  <MyAwesomeREactComponent history={history} />,
  document.getElementById('app')
)
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import CircularProgress from '@material-ui/core/CircularProgress'

import styles from './styles.module.css'

const dynamicImport = importingComponent => (
  Loadable({
    loader: importingComponent,
    loading: () => <div style={{ textAlign: 'center', marginTop: '5em' }}><CircularProgress /></div>
  })
)

const Dashboard = dynamicImport(() => import('./pages/Dashboard'))
const Calories = dynamicImport(() => import('./pages/Calories'))
const Summary = dynamicImport(() => import('./pages/Summary'))
const NoMatch = dynamicImport(() => import('./pages/NoMatch'))

const App = (props) => {
  const { history } = props

  return (
    <div className={styles.container}>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/add-calories' component={Calories} />
        <Route path='/summary' component={Summary} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  )
}

export default App
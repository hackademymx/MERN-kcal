import React from 'react'
import { Link } from "react-router-dom"
import styles from './styles.module.css'

import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

class Dashboard extends React.Component {
 
  goToAddCalories = event => {
    event && event.preventDefault()
    this.props.history.push('/add-calories');
  }

  render () {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Consumo de calorías</h1>
        <div className={styles.section}>
          <h3>Listado de calorías consumidas</h3>
          <div className={styles.containerBtns}>
            <Fab
              size='medium'
              color='primary'
              arial-label='Add'
              onClick={this.goToAddCalories}
            >
              <AddIcon />
            </Fab>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
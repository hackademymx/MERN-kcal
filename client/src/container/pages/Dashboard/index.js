import React from 'react'
import { Link } from "react-router-dom"
import styles from './styles.module.css'
import axios from 'axios'

import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import CircularProgress from '@material-ui/core/CircularProgress'
import IconButton from '@material-ui/core/IconButton';
import Assessment from '@material-ui/icons/Assessment'

import {KcalList} from 'component'

const HOST = process.env.API_URL

class Dashboard extends React.Component {
  state = {
    items: [],
    loading: false,
    error: null
  }

  componentDidMount () {
    // cargar todas las comidas
    this.load()
  }

  async load () {
    this.setState({
      loading: true,
    })

    try {
      const items = await axios.get(`${HOST}/api/meals`).then(res => res.data)
      this.setState({
        loading: false,
        items
      })
    } catch(error) {
      this.setState({
        loading: false,
        error: error.message
      })
    }
  }
 
  goToAddCalories = event => {
    event && event.preventDefault()
    this.props.history.push('/add-calories');
  }

  goToSummary = event => {
    event && event.preventDefault()
    this.props.history.push('/summary');
  }

  getDetail = uuid => e => {
    console.log('getDetail')
    e && e.preventDefault()
    this.props.history.push(`/detail/${uuid}`)
  }

  render () {
    const { loading, error, items } = this.state

    if(loading) {
      return (
        <div className={styles.loading}>
          <CircularProgress />
        </div>
      )
    }

    const ErrorMsg = <p className={styles.error}>{error}</p>
    const List = error ? ErrorMsg : <KcalList items={items} onClick={this.getDetail} />

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Consumo de calorías</h1>
        <div className={styles.section}>
          {List}
          <div className={styles.containerBtns}>
            <IconButton
              color='primary'
              aria-label='charts'
              onClick={this.goToSummary}
            >
              <Assessment style={{ fontSize: '46px', color: '#ffc107' }} />
            </IconButton>
            <br />
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
import React from 'react'
import axios from 'axios'

import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import { transformDate } from 'helpers'

const HOST = process.env.API_URL

const inlStyles = {
  root: {
    margin: '1em auto',
    textAlign: 'center',
    background: 'white',
    width: '50%'
  }
}

const message = (item, type) => {
  const { day, month, year, quantityMeals, totalKcal } = item
 
  const date = `${type === 'byMonth' ? 'En' : 'El'} ${transformDate(item, type)}`
  const quantity = `registraste ${quantityMeals} comida${quantityMeals > 1 ? 's' : ''}`
  const total = `con un total de ${totalKcal} calorías`

  return (
    <p>
      {`${date} ${quantity} ${total}`}
    </p>
  )

}

class SummaryList extends React.Component {
  state = {
    items: [],
    loading: false,
    error: null
  }

  componentDidMount() {
    this.load()
  }

  async load() {
    this.setState({
      loading: true,
      error: null
    })

    const { summaryType } = this.props

    try {
      const items = await axios.get(`${HOST}/api/summary/${summaryType}`).then(res => res.data)
      this.setState({
        loading: false,
        items
      })

    } catch (error) {
      this.setState({
        loading: true,
        error: error.message
      })
    }
  }

  render () {
    const { items } = this.state
    const { classes, summaryType } = this.props

    return (
      <Paper className={classes.root}>
        <List component="nav" aria-label="main mailbox folders">
          {items.map((item, index) => {
            console.log("TCL: SummaryList -> render -> item", item)
            return (
              <div key={index} style={{ paddingTop: '1em' }}>
                <ListItemText
                  primary={message(item, summaryType)}
                />
                <Divider />
              </div>
            )
          })}
        </List>
      </Paper>
    )
  }
}

export default withStyles(inlStyles)(SummaryList)
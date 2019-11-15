import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { withStyles } from '@material-ui/core/styles'

import { title } from './styles.module.css'

import Day from './day'
import Month from './month'
import Year from './year'

const paperStyl = theme => ({
  paper: {
    width: '50%',
    margin: '1.5em auto'
  }
})

const Summary = ({ classes }) => {
  const { paper } = classes
  // HOOK
  const [value, setValue] = useState(0)

  const changeTab = (event, value) => {
    setValue(value)
  }

  
  return (
    <>
      <h1 className={title}>Resumen de calorías</h1>
      <Paper className={paper}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={changeTab}
        >
          <Tab label='Día' />
          <Tab label='Mes' />
          <Tab label='Año' />
        </Tabs>
        {value === 0 && <Day />}
        {value === 1 && <Month />}
        {value === 2 && <Year />}
      </Paper>
    </>
  )
}

// withStyles es un HOC
export default withStyles(paperStyl)(Summary)
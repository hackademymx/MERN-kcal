import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import { totalKcal, UTCDate } from 'helpers'

import MealType from './MealType' 

const InlStyles = theme => ({
  header: {
    background: '#1769aa',
    color: 'white',
    padding: '.5em',
    borderRadius: '4px 4px 0px 0px'
  },
  title: {
    fontSize: '1.3em',
    color: 'white',
    textAlign: 'center',
    '@media (max-width: 1024px)': {
      fontSize: '1em'
    }
  },
  total: {
    textAlign: 'center',
    padding: '1.5em 0',
    width: '129px',
    borderRadius: '50%',
    margin: '.5em auto',
    background: '#1769aa',
    '@media (max-width: 1024px)': {
      background: 'initial'
    }
  },
  totalNumber: {
    color: 'white',
    margin: 0,
    fontSize: '3em'
  },
  totalSubtitle: {
    color: 'white',
    margin: 0,
    fontSize: '1em'
  },
  chipGroup: {
    padding: '.5em',
    textAlign: 'center'
  }
})

const KcalListItem = ({ meal, date, foods, mealType, uuid, classes}) => {
  return (
    <>
      <div className={classes.header}>{UTCDate(date, 'd MMM yyyy')}</div>
      <h1 className={classes.title}>{meal}</h1>
      <div className={classes.total}>
        <h1 className={classes.totalNumber}>{totalKcal(foods)}</h1>
        <h1 className={classes.totalSubtitle}>Kcal</h1>
      </div>
      <div className={classes.chipGroup}>
        <MealType label={mealType.value} />
      </div>
    </>
  )
}

KcalListItem.propTypes = {
  meal: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  foods: PropTypes.array.isRequired,
  mealType: PropTypes.object.isRequired,
  uuid: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}


export default withStyles(InlStyles)(KcalListItem)
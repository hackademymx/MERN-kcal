import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Chip } from '@material-ui/core'

const InlStyles = theme => ({
  dinner: {
    background: '#00e676',
    color: 'white',
    margin: '.5em .5em 0 0',
    fontSize: '12px'
  }
})

const MEAL_STYLE = {
  'Desayuno': {
    color: 'secondary',
    className: 'chipRoot'
  },
  'Colación': {
    color: 'primary',
    className: 'chipRoot'
  },
  'Comida': {
    color: 'default',
    className: 'chipRoot'
  },
  'Cena': {
    color: 'default',
    className: 'dinner'
  }
}

const MealType = ({ label, classes }) => {
  return (
    <Chip
      label={label}
      color={MEAL_STYLE[label].color}
      className={MEAL_STYLE[label].className}
    />
  )
}

MealType.propTypes = {
  label: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(InlStyles)(MealType)
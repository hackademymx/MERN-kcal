import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'

import KcalListItem from './kcalListItem'

const InlStyles = theme => ({
  root: {
    paddingBottom: theme.spacing(2),
    background: '#2196f3',
    width: '250px',
    marginTop: '1em',
    marginRight: '1em',
    transition: '.3s',
    cursor: 'pointer',
    '&:hover': {
      opacity: '0.8'
    },
    '@media (max-width: 1024px)': {
      width: '120px'
    },
    '@media (max-width: 376px)': {
      width: '320px',
      marginRight: '0'
    }
  }
})


const KcalList = ({ items, classes, onClick}) =>
  items.map((item) =>
    <Paper key={item.uuid} className={classes.root} onClick={onClick(item.uuid)}>
      <KcalListItem {...item} />
    </Paper>
  )

KcalList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      meal: PropTypes.string,
      date: PropTypes.string,
      foods: PropTypes.array,
      mealType: PropTypes.object,
      uuid: PropTypes.string,
    }).isRequired,
  ),
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(InlStyles)(KcalList)
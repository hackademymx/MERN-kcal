import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 140
  }
})

const DropDown = ({ classes, name, label, value, data, onChange }) => {
  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor={`${name}-simple`}>{label}</InputLabel>
      <Select
        value={value}
        name={name}
        onChange={onChange}
        inputProps={{
          name: name,
          id: `${name}-simple`
        }}
      >
        <MenuItem value=''><em>None</em></MenuItem>
        {data.map(item => (
          <MenuItem key={item.uuid} value={item.uuid}>{item.value}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

DropDown.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}

export default withStyles(styles)(DropDown)
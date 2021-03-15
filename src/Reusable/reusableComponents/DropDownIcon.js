import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  dropDownIcon: {
    position: 'absolute',
    border: 'solid',
    borderWidth: '0 2px 2px 0',
    padding: '0.1875rem',
    transform: 'rotate(45deg)',
  }
}))
const DropDownIcon = (props) => {
  const {...rest} = props;
  const classes = useStyles();
  return (
    <span className={classes.dropDownIcon}
    {...rest}
    ></span>
  )
}

export default DropDownIcon;

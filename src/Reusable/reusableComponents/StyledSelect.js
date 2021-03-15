import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
// import { Select } from 'formik-material-ui';
import {Field} from 'formik';
import {InputLabel} from "@material-ui/core";
import Select from '@material-ui/core/Select';

const useSelect = makeStyles(theme => ({
  selectWrapper: {
    marginLeft: '1rem',
    width: '10rem',
    '& .MuiInputBase-root': {
      marginTop: '0px',
    },
    '&:hover': {
      pointer: 'cursor',
    },
  },

}))

const StyledSelect = ({...props}) => {
  const classes = useSelect();
  const {values, time, handleChange} = props;

  return (
    <>
      <FormControl className={classes.selectWrapper}>
        <Select native defaultValue="" id="grouped-native-select"
                name={time}
                value={values.plannedTime}
                onChange={handleChange}
        >
            <option label="I don't know" value="I don't know"/>
            <optgroup label="Category 1">
              <option value="1pm">1 PM</option>
              <option value="2pm">2 PM</option>
            </optgroup>

            <optgroup label="Category 2">
              <option value="3pm">3 PM</option>
              <option value="4pm">4 PM</option>
            </optgroup>

        </Select>
      </FormControl>
    </>
  );
}

export default StyledSelect;
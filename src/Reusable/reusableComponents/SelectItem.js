import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100px",
    marginRight: "3px",
  },
}));

const SelectItem = (props) => {
  const classes = useStyles();

  const { label, name, value, onChange, options } = props;
  return (
    <FormControl variant="filled" className={classes.root}>
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        disableUnderline={true}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default SelectItem;

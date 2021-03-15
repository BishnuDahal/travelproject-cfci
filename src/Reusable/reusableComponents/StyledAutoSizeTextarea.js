import React from 'react';
import {Field} from "formik";
import {makeStyles} from "@material-ui/core/styles";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";


const useAutosizeTextarea = makeStyles(theme => ({
  autosizeTextareaWrapper: {
    marginTop: '1rem',
    padding: '1rem',
    width: '450px',
    '&:active, &:focus': {
      borderColor: '#f29807',
      outlineColor: '#f29807',
    },
  },
}))

const StyledAutoSizeTextarea = ({ name, values, setFieldValue}) => {
  const classes = useAutosizeTextarea();
  return (
    <>
      <Field
        className={classes.autosizeTextareaWrapper}
        component={TextareaAutosize}
        rowsMax={4}
        value={values.specialRequests}
        aria-label="maximum height"
        placeholder="Your Special Request"
        name={name}
        onChange={(e) => setFieldValue(name, e.target.value)} // for  locally set field value
        // onChange={(e) => handleChange(e, setFieldValue)} // to handle field value globally
        // onChange={(e)=>console.log(e.target.value)} // console current entered value

      />

    </>
  );
}

export default StyledAutoSizeTextarea;
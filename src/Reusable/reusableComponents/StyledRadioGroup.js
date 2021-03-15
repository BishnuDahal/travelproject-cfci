import React from 'react';
import { FormControlLabel, Radio } from '@material-ui/core';
import { RadioGroup } from 'formik-material-ui';
import {Field} from 'formik';
import {createMuiTheme, ThemeProvider} from '@material-ui/core';

const theme = createMuiTheme({
  palette:{
    primary:{
      main: "#f29807",
    },
  },
})

const StyledRadioGroup = ({label, values, name, setFieldValue}) => {
  return (
    <>
     <ThemeProvider theme={theme} >
       <Field component={RadioGroup} name={name} style={{display:'inline'}}>
         <FormControlLabel
           value={label}
           control={<Radio color="primary" />}
           label={label}
           onChange={() => setFieldValue(name, label)}
         />
       </Field>
     </ThemeProvider>
    </>
  );
}

export default StyledRadioGroup;
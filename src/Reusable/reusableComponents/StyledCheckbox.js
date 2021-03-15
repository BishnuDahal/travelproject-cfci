import React from "react";
import { Field } from "formik";
import { CheckboxWithLabel } from "formik-material-ui";
import { FormControlLabel } from "@material-ui/core";

import { makeStyles, ThemeProvider, createMuiTheme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f29807",
    },
  },
});
const useCheckbox = makeStyles((theme) => ({
  checkboxWrapper: {
    // marginLeft: "80px",
  },
  iconStyle: {
    // modify the size of icon
    "& > svg": {
      minWidth: 40,
      minHeight: 40,
      // color: "rgba(0, 0, 0, 0.54)",
    },
  },
}));

const StyledCheckbox = (props) => {
  const {name, label, item, setFieldValue, handleCheckbox, font} = props;

  const classes = useCheckbox();
  return (
    <>
      <div className={classes.checkboxWrapper}>
        <ThemeProvider theme={theme}>
          <FormControlLabel

            label={<Typography className={font.labelFont}>{label}</Typography>}
            labelPlacement="end"
            disabled={false}
            control={
              <Field 
              component={CheckboxWithLabel}
              name={name}
              value={label}
              checked={item.isChecked}
              type="checkbox"
              color="primary"
              onClick={event => handleCheckbox(event, label, item, setFieldValue)}
              // onClick={ e => {
              //   if(item.label === e.target.value){
              //     item.isChecked =  e.target.checked
              //   }
              // }}
              
              />
            }
          />
        </ThemeProvider>
      </div>
    </>
  );
};

export default StyledCheckbox;

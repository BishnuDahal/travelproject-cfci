import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { makeStyles, ThemeProvider, createMuiTheme } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f29807",
    },
  },
});

const useDatePicker = makeStyles((theme) => ({
  datePickerWrapper: {
    "& .MuiTextField-root": {
      backgroundColor: theme.palette.grey[100],
    },
    marginBottom: theme.spacing(3),
    opacity: "0.6",
    letterSpacing: "1.5px",
  },
}));

const StyledDatePicker = (props) => {
  const classes = useDatePicker();
  const { label, name, inputVariant, setFieldValue, value } = props;
  return (
    <>
      <Grid className={classes.datePickerWrapper}>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              InputLabelProps={{ style: { fontSize: 21 } }}
              fullWidth
              disablePast
              autoOk
              variant="inline"
              name={name}
              label={label}
              inputVariant={inputVariant}
              format="MM/dd/yyyy"
              value={value}
              onChange={(e) => setFieldValue(name, e)}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              inputProps={{
                style: {
                  padding: "1rem",
                },
              }}
            />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </Grid>
    </>
  );
};

export default StyledDatePicker;

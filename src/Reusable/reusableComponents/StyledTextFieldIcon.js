import React from "react";
import {
  makeStyles,
  InputAdornment,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core";
import {TextField} from "formik-material-ui";
import {Field} from "formik";
import LocationOnIcon from '@material-ui/icons/LocationOn';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f29807",
    },
  },
});

const useTextFieldIcon = makeStyles((theme) => ({
  searchInput: {
    marginBottom: theme.spacing(2),
    opacity: "0.6",
    letterSpacing: "1px",
    "& .MuiSvgIcon-root": {
      marginRight: ".3rem",
    },
  },
}));

const StyledTextFieldIcon = (props) => {
  const classes = useTextFieldIcon();
  const {placeholder, name, type, variant, handleChange, setFieldValue} = props;

  return (
    <ThemeProvider theme={theme}>
      <Field
        // onChange={(e)=>console.log(e.target.value)}
        // onChange={(e) => handleChange(e, setFieldValue)}
        disabled={false}
        variant={variant}
        autoFocus={true}
        placeholder={placeholder}
        fullWidth
        className={classes.searchInput}
        component={TextField}
        type={type}
        name={name}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <LocationOnIcon fontSize="large" color="action"/>
            </InputAdornment>
          ),
        }}
        inputProps={{
          style: {
            padding: "1rem",
          },
        }}
      />
    </ThemeProvider>
  );
};

export default StyledTextFieldIcon;

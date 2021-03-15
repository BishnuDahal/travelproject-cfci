import React from "react";
import {
  Button,
  makeStyles,
  InputAdornment,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { Field } from "formik";
import { SearchIcon } from "@material-ui/data-grid";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f29807",
    },
  },
});

const useSearchField = makeStyles((theme) => ({
  searchInput: {
    marginBottom: theme.spacing(2),
    opacity: "0.6",
    letterSpacing: "1px",
    "& .MuiSvgIcon-root": {
      marginRight: ".3rem",
    },
  },
  position: "relative", //for icon

  iconBtn: {
    position: "absolute",
    marginTop: "0px",
    right: "0px",
  },

  iconLabel: {
    marginRight: "-15px",
  },
}));

const SearchField = (props) => {
  const classes = useSearchField();
  const { placeholder, name, type, handleChange, setFieldValue } = props;

  return (
    <ThemeProvider theme={theme}>
      <Field
        // onChange={(e)=>console.log(e.target.value)}
        onChange={(e) => handleChange(e, setFieldValue)}
        disabled={false}
        autoFocus={true}
        placeholder={placeholder}
        fullWidth
        className={classes.searchInput}
        component={TextField}
        type={type}
        name={name}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="small" />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <Button
                classes={{ root: classes.iconBtn, label: classes.iconLabel }}
              >
                <LocationSearchingIcon fontSize="small" />
              </Button>
            </InputAdornment>
          ),
        }}
        inputProps={{
          style: {
            height: "2rem",
          },
        }}
      />
    </ThemeProvider>
  );
};

export default SearchField;

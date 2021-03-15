import React from 'react';
import {makeStyles, MuiThemeProvider} from "@material-ui/core/styles";
import {createMuiTheme, Grid, Typography} from "@material-ui/core";
import StyledSelect from "../../Reusable/reusableComponents/StyledSelect";

const userPlannedArrival = makeStyles(theme => ({
  plannedArrivalWrapper: {
    marginTop: '1rem',
    padding: '1rem',
    border: "1px solid rgba(0, 0, 0, 0.2)",
    backgroundColor: '#f4ebe4',
  },

  content: {
    fontFamily: 'Lato',
    fontSize: 15,
    fontWeight: 600,

  },

  small:{
    marginLeft: '.5rem',
    fontSize: 16,
    fontWeight: 500,
  },

}))

const theme = createMuiTheme({
  palette:{
    primary: {
      main: "#f29807",
    },
  },
})

const PlannedArrival = (props) => {
  // const {values, time, handleChange} = props;
  const classes = userPlannedArrival()
  return (
    <>

      <div style={{marginTop: '1.5rem'}}>
        <Typography variant="h3">Let the property know your planned arrival time (optional)</Typography>
      </div>

      <Grid container className={classes.plannedArrivalWrapper}>
        <Grid item xs={12}>
          <Typography gutterBottom>
            You may hear a response from the property regarding your arrival time
          </Typography>
          <Typography gutterBottom className={classes.content}>24-hour front desk
            <span className={classes.small}>– help whenever you need it! You can</span>
            <span className={classes.content} style={{marginLeft: '.3rem'}}>check in from 13:00.</span>
          </Typography>
        </Grid>
        <Grid item xs={8} >
          <Typography className={classes.content} >
            Arrival time: Thursday, 11 March 2021
            <MuiThemeProvider theme={theme}>
              <StyledSelect {...props}/>
            </MuiThemeProvider>
          </Typography>
        </Grid>
      </Grid>

    </>
  );
}

export default PlannedArrival;
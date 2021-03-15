import React from 'react';
import CardContent from "@material-ui/core/CardContent";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {StyledDivider} from "../../Reusable/reusableComponents";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const useBookingDetail = makeStyles(theme => ({
  checkInOut: {
    display: 'flex',
    justifyContent: 'space-between',
    padding:'.5rem'
  },

  dateTime: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '.5rem'
  },

  stay: {
    padding: '.5rem'
  },

  changeDate: {
    '&:hover': {
      cursor: 'pointer'
    }
  },

  selectionLink: {
    textDecoration: 'none',
    '&:hover': {
      cursor: 'pointer',
    }
  },
}))

const BookingDetail = (props) => {
  const classes = useBookingDetail()
  return (
    <>
      <CardContent style={{padding: '.5rem'}}>
        <Grid container>
          <Grid item xs={12} className={classes.checkInOut}>
            <Typography variant="caption">Check In</Typography>
            <Typography variant="caption">Check Out</Typography>
          </Grid>
          <Grid item xs={12} className={classes.dateTime}>
            <div>
              <Typography variant="h2">Tue 2 Mar 2021</Typography>
              <Typography color="textSecondary">From 1:00 PM</Typography>
            </div>
            <StyledDivider orientation="vertical" flexItem={true}/>
            <div>
              <Typography variant="h2">Tue 3 Mar 2021</Typography>
              <Typography color="textSecondary">To 1:00PM</Typography>
            </div>
          </Grid>

          <Grid item xs={12} className={classes.stay}>
            <Typography gutterBottom>Total length of stay:</Typography>
            <Typography gutterBottom variant="subtitle2">1 Night</Typography>
            <Typography gutterBottom color="primary" className={classes.changeDate}>Travel on different dates?</Typography>
          </Grid>
        </Grid>
        <StyledDivider orientation="horizontal"/>


      </CardContent>
      <CardContent style={{paddingTop: '.5rem'}}>
        <Typography gutterBottom variant="subtitle2">You Selected:</Typography>
        <Typography gutterBottom>Deluxe Room</Typography>
        <Link to="#" className={classes.selectionLink}>
          <Typography gutterBottom color="primary">Change your selection</Typography>
        </Link>
      </CardContent>
    </>
  );
}

export default BookingDetail;
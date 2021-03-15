import React from 'react';
import {Grid, Typography, createMuiTheme, ThemeProvider} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import WifiIcon from "@material-ui/icons/Wifi";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
import TvIcon from "@material-ui/icons/Tv";
import PoolIcon from "@material-ui/icons/Pool";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import {StyledCheckbox, StyledTextField} from "../../Reusable/reusableComponents";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#006607',
    },
  },
})

const useBookedRoomDetail = makeStyles(theme => ({
  bookedRoomWrapper: {
    marginTop: '1rem',
    padding: '1rem',
    border: "1px solid rgba(0, 0, 0, 0.2)",
    backgroundColor: '#f4ebe4',
  },

  contentWrap: {
    display: 'flex',
  },

  content: {
    fontFamily: 'Lato',
    fontSize: 15,
    fontWeight: 600,
    color: '#008009',
  },

  small: {
    marginLeft: '.5rem',
    fontSize: 16,
    fontWeight: 500,
    color: '',
  },

  iconArea: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#E7EDE9',
    border: '1px solid rgb(151, 229, 156)',
    marginRight: '.5rem'
  },

  iconText: {
    margin: '0 .3rem',
  },

  selectGuest: {
    margin: '1rem 0',
  },

  optionalEmail: {
    marginLeft: '3rem',
    marginBottom: '4rem',
    position: 'relative',
    display: 'block'
  },

  transportWrapper: {
    marginTop: '1rem',
    padding: '1rem',
    border: "1px solid rgba(0, 0, 0, 0.2)",
    backgroundColor: '#f4ebe4',
  },

  labelFont: {
    // marginTop: '1rem',
    fontFamily: 'Lato',
    fontSize: 15,
    fontWeight: 600,
  },
  // classes={{ label: classes.label }}


}))

const transportOptions = [
  {key: "option1", label: "I'm interested in requesting an airport shuttle", isChecked: false,
    text:"We’ll tell your accommodation that you’re interested so they can provide details and costs."},
  {key: "option2", label: "I'm interested in renting a car", isChecked: false,
    text: "Make the most out of your trip and check car hire options in your booking confirmation."},

];
const BookedRoomDetail = ({guestEmail, guestEmailOp, transport, setFieldValue, values, handleCheckbox}) => {
  const classes = useBookedRoomDetail()
  return (
    <>
      <Grid container className={classes.bookedRoomWrapper}>
        <Grid item xs={12}>
          <Typography variant="h3">Deluxe Room</Typography>

          <div className={classes.contentWrap}>
            <Typography className={classes.content}>FREE cancellation
              <span className={classes.small}>before 23:59 on 9 March 2021 </span>
            </Typography>
          </div>

          {/*Icon Section*/}
          <Grid item style={{display: 'flex'}}>
            <ThemeProvider theme={theme}>
              <div className={classes.iconArea}>
                <WifiIcon color="primary"/>
                <Typography className={classes.iconText}>Wifi</Typography>
              </div>
              <div className={classes.iconArea}>
                <FitnessCenterIcon color="primary"/>
                <Typography className={classes.iconText}>Gym</Typography>
              </div>
              <div className={classes.iconArea}>
                <LocalDiningIcon color="primary"/>
                <Typography className={classes.iconText}>Dinner</Typography>
              </div>

              <div className={classes.iconArea}>
                <TvIcon color="primary"/>
                <Typography className={classes.iconText}>Flat-screen TV</Typography>
              </div>
              <div className={classes.iconArea}>
                <PoolIcon color="primary"/>
                <Typography className={classes.iconText}>Pool</Typography>
              </div>
              <div className={classes.iconArea}>
                <AcUnitIcon color="primary"/>
                <Typography className={classes.iconText}>Air conditioning</Typography>
              </div>
            </ThemeProvider>
          </Grid>

          <Grid item className={classes.selectGuest}>
            <Typography>Select Option for Guest</Typography>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <StyledTextField label="Guest Full Name" type="text" name={guestEmail}/>
        </Grid>

        { (values.bookingFor === 'Booking is for someone else') &&
          <Grid item xs={4} className={classes.optionalEmail}>
          <StyledTextField label="Email Optional" type="email" name={guestEmailOp}/>
          <small style={{position: 'absolute', right: '0', top: '3.3rem', fontStyle: 'italic'}}>
          Emails are only used for sending reservation information.
          No commercial messages – guaranteed</small>
          </Grid>
        }

      </Grid>

      <Grid container className={classes.transportWrapper}>
        {transportOptions.map(item => (
          <Grid item xs={12} key={item.key} style={{padding: '1rem', position: 'relative'}}>
            <StyledCheckbox
              font={classes}
              label={item.label}
              name={transport}
              item={item}
              setFieldValue={setFieldValue}
              handleCheckbox={handleCheckbox}
            />
              <Typography style={{marginLeft: '2.2rem', position:'absolute', bottom: '3px' }}>
                {item.text}
              </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default BookedRoomDetail;
import React from "react";
import useTravelLandingPageStyles from "./LandingStyle";
import Grid from '@material-ui/core/Grid';
import Buttonpannel from "../../Components/Landing/Buttonpannel";


const defaultProps = {
  bgcolor: "background.paper",
  m: 1,
  mb: 2,
  borderColor: "text.primary",
  style: { width: "70px", height: "5px" },
};

export default function TravelLandingPage() {
  const classes = useTravelLandingPageStyles();
  return (
    <div className={classes.travellandingpage} >
      <div className={classes.landingtravelimage}></div>
      <div className={classes.overlay}></div>
      <Grid container spacing={3} className={classes.landingpagecontent}>
        <Grid item className={classes.landingcontent} xs={12} sm={6} lg={6}>
          {/* <Typography variant="h4">
             THE AIR SMELLS SWEETER 
             {/* <Box display="flex" justifyContent="start">
              <Box {...defaultProps} borderTop={1} />
            </Box>  */}
          {/* </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
             Whether you call it nature travel, sustainable travel or responsible
            ecotourism, there’s something incredibly potent, powerful, and
            cleansing about getting away from the hustle and bustle of the city. 
          </Typography> */} 
        </Grid>
        <Grid item className={classes.landingformcontent} xs={12} sm={6} lg={6}>
          <Buttonpannel classes={classes} />
        </Grid>
      </Grid>
    </div>
  );
}

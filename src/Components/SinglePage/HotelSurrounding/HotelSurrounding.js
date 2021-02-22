import React from 'react'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NearbySection from './NearbySection';
import NaturalBeauty from './NaturalBeauty';
import ResturantCafe from './ResturantCafe';
import ClosestAirports from './ClosestAirports';
export default function HotelSurrounding({classes}) {
    return (
        <div  className={classes.hotelsurrounding} >
            <div style={{padding: "10px"}}>
           <Typography  variant="h5" component="h2"><b>Hotel Surrounding <sup>*</sup></b></Typography> {''}
           <p style={{background: "#f4af1f", fontSize:"12px",padding: "4px", width: "300px"}}> 👣  Guests love exploring the neighbourhood</p>
           </div><hr/>
              <div className={classes.root}>
      <Grid container spacing={1}>
              <Grid item xs={6}>
          <div className={classes.paper}>
                <NearbySection />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.paper}>
              <NaturalBeauty />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.paper}>
              <ResturantCafe />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.paper}>
              <ClosestAirports />
          </div>
        </Grid>
        <Typography  variant="body2" component="h2">
* All distances are measured in straight lines. Actual travel distances may vary.</Typography>
        </Grid>
    </div>
        </div>
    )
}

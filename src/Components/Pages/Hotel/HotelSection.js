import React from "react";
import useHotelStyles from "./HotelStyle";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import HotelList from "./HotelList";
import HotelContent from "./HotelContent";
import HotelHeading from "./HotelHeading";

export default function HotelSection() {
  const classes = useHotelStyles();
  return (
    <div className={classes.hotelsection}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div className={classes.papercontent}>
              <HotelHeading classes={classes} />

              <Box
                display="flex"
                flexWrap="wrap"
                style={{ width: "100%", margin: "auto", objectFit: "contain" }}
              >
                <HotelContent classes={classes} />

                <div className={classes.hotellistcontent}>
                  <HotelList classes={classes} />
                  {/* <HotelList />  */}
                </div>
              </Box>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

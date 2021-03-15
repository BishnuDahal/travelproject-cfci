import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LocalAirportIcon from '@material-ui/icons/LocalAirport';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export default function RoomsCardHead({classes}) {
    return (
        <div>
            <Grid container  direction="row" spacing={0} style={{alignItems: 'center'}}>
        <Grid item xs={8}>
        <Typography variant="body1">
        <List style={{padding: "0px"}}>
              <ListItem>
        <LocalAirportIcon style={{color: "#f4af2f"}}/> {""}
         <b>+300 trips in Nepal with 3,050 reviews</b>
        </ListItem>
        </List>
          </Typography>
        </Grid>
        <Grid item xs={4}>
        <span style={{display: 'flex'}}>
          <Typography variant="body2" color="textSecondary" className={classes.body2}>
              <b style={{color: "#f4af2f"}}>⤵</b> Best Price Guarenteed
          </Typography>
          <Typography variant="body2" color="textSecondary" className={classes.body2} style={{marginLeft: "20px"}}>
          <b style={{color: "#f4af2f"}}>⤵</b> No Booking Fees
          </Typography>
          </span>
        </Grid>
        </Grid>         
        </div>
    )
}

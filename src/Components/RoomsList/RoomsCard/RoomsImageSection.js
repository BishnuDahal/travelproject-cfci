import React from 'react'
import CardMedia from '@material-ui/core/CardMedia';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import Leaflet from '../../../Reusable/Leaflet';




export default function RoomsImageSection({classes}) {
    return (
        <div style={{position:"relative", paddingTop:"10px"}}>
            <CardMedia
          component="img"
          alt="RoomsCardImage"
          height="auto"
          image="/images/roomscard.jpeg"
          title="RoomsCardImage"
        />
         <div style={{position: "absolute", top: "0px", right: "0px", backgroundColor: "#df3f2d", width: "80px", padding: "4px"}}>
        <Typography variant="body1" style={{color:"white", fontWeight:"500"}}  > 15% Off Today</Typography>
        </div>
        <div style={{position: "absolute", top: "0px", left: "0px", backgroundColor: "#f59130", width: "100px", padding: "4px",borderRadius: "4px"}}>
        <Typography variant="body1" style={{color:"white", fontWeight:"500", fontSize:"14px"}}  > Best Seller</Typography>
        </div>
        <Grid container  direction="row" spacing={1}>
        <Grid item xs={5}>
            <Leaflet />
        </Grid>
        <Grid item xs={5}>
        <List>
        <ListItem className={classes.listitem}>
                <Typography variant="body2" color="textSecondary" className={classes.body2}>Start</Typography>
                <Typography variant="body1" color="textPrimary" className={classes.body1}> Kathmandu,Nepal</Typography>
             </ListItem>
             <ListItem className={classes.listitem}>
                <Typography variant="body2" color="textSecondary" className={classes.body2}>Ends</Typography>
                <Typography variant="body1" color="textPrimary" className={classes.body1}> Kathmandu,Nepal</Typography>
             </ListItem>
        </List> 
        </Grid>
        </Grid>
       
        </div>
    )
}

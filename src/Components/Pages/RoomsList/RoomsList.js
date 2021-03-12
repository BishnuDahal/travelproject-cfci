import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RoomsCard from './RoomsCard/RoomsCard'
import useRoomsStyles from './RoomsStyles'
import BreadCrumbs from './BreadCrumbs'
import CheckboxSection from './FilterSection/CheckboxSection';


export default function RoomsList() {
    const classes = useRoomsStyles();
    
    return (
       <>
       <Grid container spacing={0} className={classes.roomslist}>
         <Grid item xs={12}>
           <BreadCrumbs />
         </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <CheckboxSection classes={classes}/>
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}>
              <RoomsCard classes={classes}/>
          </Paper>
        </Grid>
        </Grid>
       </>
    )
}

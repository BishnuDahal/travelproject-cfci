import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RoomsCard from '../../Components/RoomsList/RoomsCard/RoomsCard'
import useRoomsStyles from './RoomsStyles'
import BreadCrumbs from '../../Components/RoomsList/BreadCrumbs'
import CheckboxSection from '../../Components/RoomsList/FilterSection/CheckboxSection';



export default function RoomsList(props) {
    const classes = useRoomsStyles();
    console.log(props, 'items')
    const items= props.location.state.searchitem;
    console.log(items, 'item')
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
              <RoomsCard classes={classes} items={items}/>
              {/* <br/>
              <RoomsCard classes={classes}/> */}
          </Paper>
        </Grid>
        </Grid>
       </>
    )
}

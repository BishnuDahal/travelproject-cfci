import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import RoomsButtonSection from '../RoomsButtonSection';
import RoomsContentSection from './RoomsContentSection';
import RoomsImageSection from './RoomsImageSection';
import { Link } from 'react-router-dom';
import SelectSort from './SelectSort'
import RoomsCardHead from './RoomsCardHead';

export default function RoomsCard({classes, items}) {

  return (
    <>
    <div>
    <SelectSort classes={classes}/>
    <RoomsCardHead classes={classes}/>
    <Link to='/roomslist/:hotel_id' style={{textDecoration: 'none'}}>
    {items.map(item => 
      //  console.log(item, "roomscarditem")
     <div key={item.hotel_id}>
    <Card className={classes.rootroomcard}>
      <Grid container  direction="row" spacing={0}>
        <Grid item xs={5}>
        <RoomsImageSection classes={classes} item={item}/>
        </Grid>
        <Grid item xs={5}>
        <RoomsContentSection classes={classes} item={item}/>
        </Grid>
        <Grid item xs={2}>
       <RoomsButtonSection />
      </Grid>
      </Grid>
    </Card>
    </div>
    
    )}
    </Link>
    </div>
    </>
  );
}

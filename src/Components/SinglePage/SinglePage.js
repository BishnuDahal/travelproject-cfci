import React, {useState} from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useSinglePageStyles from './SinglePageStyle';
import useLandingPageStyles from '../../Components/Pages/Landing/LandingStyle'
import ReserveCardUnit from '../Pages/Landing/ReserveCardUnit';
import GridListImage from './GridListImage'
import SinglePageDescription from './SinglePageDescription/SinglePageDescription';
import SinglePageTable from './SinglePageTable/SinglePageTable'
import HotelSurrounding from './HotelSurrounding/HotelSurrounding';
import Facilities from './Facility/Facilities';

export default function SinglePage({tile}) {
    const classes = useSinglePageStyles();
    const classesa =  useLandingPageStyles();

console.log(tile, "sp")
    return (
        <div className={classes.singlepage}>
            <Grid container spacing={3}>
        <Grid item lg={4} sm={6} xs={12}>
          <Paper className={classes.paper}>
              <ReserveCardUnit classes={classesa} />
          </Paper>
        </Grid>

        <Grid item lg={7} sm={6} xs={12}>
          <Paper className={classes.paper}>
              <GridListImage classes={classes} tile={tile} />
              <br/><br/>
              <div>
              <SinglePageDescription classes={classes} tile={tile} /> 
              </div>
              <div>
                <SinglePageTable />
              </div>
              <div>
                <HotelSurrounding classes={classes} />
              </div>
              <div>
                <Facilities classes={classes} tile={tile}/>
              </div>
          </Paper>
        </Grid>

      </Grid>

        </div>
    )
}

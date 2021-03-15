import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useSinglePageStyles from './SinglePageStyle';
// import useLandingPageStyles from '../HomeLanding/LandingStyle';
// import ReserveCardUnit from '../Landing/ReserveCardUnit';
import GridListImage from '../../Components/SinglePage/GridListImage'
import SinglePageDescription from '../../Components/SinglePage/SinglePageDescription/SinglePageDescription';
import SinglePageTable from '../../Components/SinglePage/SinglePageTable/SinglePageTable'
import HotelSurrounding from '../../Components/SinglePage/HotelSurrounding/HotelSurrounding';
// import Facilities from './Facility/Facilities';
// import GuestReview from './GuestsReview/GuestReview';



export default function SinglePage({tile}) {
    const classes = useSinglePageStyles();
    //  const classesa =  useLandingPageStyles();

console.log(tile, "sp")
    return (
        <div className={classes.singlepage}>
            <Grid container spacing={3}>
        <Grid item lg={4} sm={6} xs={12}>
          {/* <Paper className={classes.paper}>
              <ReserveCardUnit classes={classesa} />
          </Paper> */}
        </Grid>

        <Grid item lg={7} sm={6} xs={12}>
          <Paper className={classes.paper}>
              <GridListImage classes={classes} tile={tile} />
              <br/><br/>
              <div>
              <SinglePageDescription classes={classes} tile={tile} /> 
              </div>
          </Paper>
        </Grid>
        <div>
          <Grid item lg={10} sm={10} xs={12} style={{ margin: "auto" }}>
        <Paper className={classes.paper} >
              <div>
                <SinglePageTable />
              </div>
              {/* <div>
                <GuestReview tile={tile} />
              </div> */}
              <div>
                <HotelSurrounding classes={classes} />
              </div>
               <div>
                 {/* <Facilities classes={classes} tile={tile} />  */}
              </div><br/> 
        </Paper>
        </Grid>  
        </div>

        </Grid>
        </div>
    )
}

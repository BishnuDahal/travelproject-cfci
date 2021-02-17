import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import CardUnit from '../../CardUnit.js';
import RecentCard from './RecentCard'




const useStyles = makeStyles((theme) => ({
    recentsection: {
        position: 'relative',
        width: '94vw',
        margin: 'auto',
    },
  paper: {
    width: '90%',
    padding: theme.spacing(2),
    backgroundColor: 'transparent',
  },
  aboutitle: {
    width: '90%',
    margin: 'auto',
  },
//   aboutimage: {
//       width: '15%',
//       position: 'absolute',
//       bottom: '-5%',
//   }
}));

export default function RecentPlace() {
    const classes = useStyles();
    return (
        <>
        <div className={classes.recentsection}>
        {/* <div className={classes.aboutimage}> 
      <img src={hotellistimage} alt="about_image" width="100%" height="100%" ></img>
      </div> */}
            <div className={classes.aboutitle}>
          <Typography variant="overline" className="overline_text" >
        overline text
      </Typography>
      <div style={{ display: "flex", justifyContent: "space-between"}}>
          <Typography variant="h4">Travel Recent Section</Typography>
          <span ><Button  href="/" className="main_button"> Recent </Button></span>
          </div>
       </div><br/>
            <Grid  container spacing={0}>
             <Grid item xs={12} sm={6} lg={6} >
          <Paper className={classes.paper}>
          <RecentCard />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <Paper className={classes.paper}>
                  <CardUnit />
          </Paper>
        </Grid>
        </Grid>
        </div>
        </>
    )
}

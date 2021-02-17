import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import hotelsectionimage from '../../assets/hotelsectionimage.jpg'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button';


const useAttractionSectionStyles = makeStyles((theme) => ({
    attractionsectionpage: {
        position: 'relative',
        width: '96vw',
        margin: 'auto',
        overflow: 'hidden',
        margin: theme.spacing(1),
    },
    aboutimage: {
        height: "60vh",
        marginLeft: "-8px",
        backgroundSize: "contain",
      },
      attractioncontent: {
          position: "absolute",
          top: '10%',
          left: '14%',
      },
      aboutitle: {
        padding: theme.spacing(1),
        marginLeft: '-15px',
    },
      attractionbodycontent: {
        [theme.breakpoints.down('xs')]: {
            display: 'none',
          },
      },
}))
export default function AttractionSection() {
    const classes =  useAttractionSectionStyles ();
    return (
        <div className={classes.attractionsectionpage}>
      <Grid container spacing={1}>
            <Grid item xs={6}>
          <Paper className={classes.paper}>
              <div style={{height: "60vh", backgroundColor: "#233342"}}></div>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <div className={classes.aboutimage}> 
      <img src={hotelsectionimage} alt="about_image" width="100%" height="100%" ></img>
      </div>
          </Paper>
        </Grid>
        <div className={classes.attractioncontent}>
        <div className={classes.aboutitle}>
          <Typography variant="overline" className="overline_text">
        overline text
      </Typography>
          <Typography variant="h4" style={{color: "#FFF"}} >Travel Section Destination?</Typography> 
          </div>
         
          <Typography variant="body1" className="body_content" style={{fontSize: "1.1vw"}}>
        body1. Lorem ipsum dolor sit amet,unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography><br/>
     
      <span className="main_button" style={{padding: "12px"}}><Button  href="/" >HotelList </Button></span>
      </div>
      </Grid>
        </div>
    )
}

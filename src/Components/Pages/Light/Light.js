import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import travelImage from '../../assets/travelImage.jpg';
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button';



const useLightStyles = makeStyles((theme) => ({
    lightpage: {
        position: 'relative',
        width:'96vw',
        margin: 'auto',
        },
        aboutimage: {
            height: "60vh",
            // [theme.breakpoints.down('xs')]: {
            //     height: '60vh',
            //    },
          },
          attractioncontent: {
            position: "absolute",
            top: '1%',
            left: '14%',
            opacity: 1,
            padding: theme.spacing(4),
        },
        abouttitle: {
          padding: theme.spacing(1),
      },
      overlay: {
        overflow: 'hidden',
        width: '100%',
        backgroundColor: '#000000',
        opacity: 0.4,
        zIndex:  '1',
 }
}))
export default function Light() {
    const classes = useLightStyles();
    return (
        <div className={classes.lightpage}>
           <div className={classes.overlay}></div>
            <div className={classes.aboutimage}> 
      <img src={travelImage} alt="about_image" width="100%" height="100%" style={{backgroundSize: "cover"}} ></img>
      </div>
      <div className={classes.attractioncontent}>
        <div className={classes.abouttitle}>
          <Typography variant="overline"className="overline_text">
        overline text
      </Typography>
          <Typography variant="h4" style={{color: "#FFF"}} >Light Section Destination?</Typography>
          </div>
          <Typography variant="body1" className="body_content" style={{fontSize: "1.3vw"}}>
        body1. Lorem ipsum dolor sit amet,unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <br/>
      <span className="main_button" style={{padding: '13px' }} ><Button  href="/" >Learn More </Button></span>
      </div>
        </div>
    )
}

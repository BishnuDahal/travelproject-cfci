import React from 'react'
import { Typography } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import LocalHotelTwoToneIcon from '@material-ui/icons/LocalHotelTwoTone';
import FlightTwoToneIcon from '@material-ui/icons/FlightTwoTone';
import ConfirmationNumberTwoToneIcon from '@material-ui/icons/ConfirmationNumberTwoTone';
import about3 from '../assets/about3.jpg'


export default function AboutLeft({classes}) {
    return (
        <div>
            <Paper className={classes.paper}>
          <div className={classes.papercontent}>
              <div className={classes.aboutitle}>
          <Typography variant="overline" className="overline_text" >
        overline text
      </Typography>
       <b><Typography variant="h4">Travel About Section </Typography></b>

          </div>
          <Box display="flex" flexWrap="wrap" style={{width: "96%", margin: "auto"}}>
              <div className={classes.aboutcontent}>
          <Typography variant="body1" >
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography><br/>
      <Link to="/" style={{textDecoration:"none", fontSize:"16px", color:"#010101"}}><b>Link Here</b><ArrowRightAltIcon style={{ fontSize: 20 }} /></Link><br/><br/><br/>

      <Box display="flex" flexWrap="nowrap">
          <span className={classes.abouticon} ><center><LocalHotelTwoToneIcon className={classes.aboutbutton} fontSize="large" /></center><br/><b>Hotels and Check</b></span>
          <span className={classes.abouticon}><center><FlightTwoToneIcon className={classes.aboutbutton}  fontSize="large" /></center><br/><b>Flights and Reserve</b></span>
          <span className={classes.abouticon}><center><ConfirmationNumberTwoToneIcon className={classes.aboutbutton}  fontSize="large" /></center><br/><b>Hot Deals and Offers</b></span>
      </Box>
      </div>

      <div className={classes.aboutimage}> 
      <img src={about3} alt="about_image" width="100%" height="60%"></img> 
      </div>
      
      </Box>
      </div>
          </Paper>
      </div>
       
    )
}

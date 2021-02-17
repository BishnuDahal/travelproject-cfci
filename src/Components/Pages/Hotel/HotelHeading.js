import React from 'react'
import Button from '@material-ui/core/Button';
import hotellistimage from '../../assets/hotellistimage.jpg';
import { Typography } from '@material-ui/core'

export default function HotelHeading({classes}) {
    return (
        <div>
               <div className={classes.aboutimage}> 
      <img src={hotellistimage} alt="about_image" width="100%" height="100%"></img>
      </div>
      
          <div className={classes.aboutitle}>
          <Typography variant="overline" className="overline_text" >
        overline text
      </Typography>
      <div style={{ display: "flex", justifyContent: "space-between"}}>
          <Typography variant="h4">Travel Hotel Section</Typography>
          <span ><Button  href="/" className="main_button"> Hotel </Button></span>
          </div>
       </div>
        </div>
    )
}

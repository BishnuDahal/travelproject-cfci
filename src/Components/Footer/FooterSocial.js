import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';

export default function FooterSocial({classes}) {
    
    return (
        <div>
            <div style={{display:"flex", flexWrap: "wrap", justifyContent: "space-between", padding: "4px"}}>
      <Typography variant="h6"  className= {classes.footerheader}>Get Social With Us</Typography>
        <span>
      <Link to="/" target="_blank" rel="noopener noreferrer" 
      style={{border:"none", textDecoration:"none", backgroundColor: "transparent", margin: "4px"}}>
      <img src="https://www.niftybuttons.com/googleplay/googleplay-button1.png" alt="googleplay" />
        </Link>
        <Link to="/" target="_blank" rel="noopener noreferrer" 
      style={{border:"none", textDecoration:"none", backgroundColor: "transparent", margin: "4px"}}>
      <img src="https://www.niftybuttons.com/googleplay/googleplay-button1.png" alt="googleplay"  />
        </Link>
        </span>
      </div> <br />
      <div style={{display:"flex", flexWrap: "wrap", justifyContent: "space-between"}}>
        <span>
         <TwitterIcon className="facebook_button" />
         <FacebookIcon  className="facebook_button"/>
         <InstagramIcon className="facebook_button" />
         <EmailIcon  className="facebook_button"/>
         </span>
         <span style={{color: "#FFF", margin: "4px"}}>@copyright 2021- Travel for Life</span>
         </div>
        </div>
    )
}

import React from 'react'
import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import Typography from '@material-ui/core/Typography';

export default function SinglePageHeading({ tile}) {
    console.log(tile, 'sh')
    return (
        <div>
              <div>
         <div style={{display: "flex",flexWrap: "wrap", justifyContent: "space-between"}}>
          <span style={{display: "flex"}}> 
          <Typography  variant="h5" component="h2">
          {tile.hotel_name}
          </Typography>
          <Typography  variant="h6" component="h2" style={{display: "flex",alignItems: "center", color: "#f6a82f", marginLeft: "10px"}}>
            {tile.hotel_star_rating}
            </Typography> 
            </span>
           <span style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between",alignItems: "center"}}>
           <FavoriteBorderIcon fontSize="medium" style={{marginRight: "10px"}} />
           <ShareIcon fontSize="medium" style={{marginRight: "10px"}} /> 
           <Button  className="main_button" style={{width:"50%"}}  href="/" ><b>Reserve</b></Button>
          </span>
          </div>
         <Typography  variant="body2" component="h2">
             {tile.hotel_address},{tile.hotel_city}{''}{tile.hotel_country}
             </Typography>
         </div>
        </div>
    )
}

import React from 'react'
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import Button from '@material-ui/core/Button';

export default function SinglePageDescriptionReserve({classes, tile}) {
    return (
        <div>
              <span>
              <Typography  variant="body2" component="h2" >
            <b> Perfect for 1-night stay!</b> 
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "4px"}} >
             <FavoriteIcon fontSize="small" /> {''}{''}
              Situated in the best rated area in Pokhara, this hotel has an excellent location score of 9.4
                  </Typography>
                  </span>
                  <br/>
                  <span>
                  <Typography  variant="body2" component="h2" >
            <b> Breakfast Info</b>
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "4px"}} >
                      Vegetarian
                  </Typography>
                  </span>
                  <br/>
                  <span>
                  <Typography  variant="body2" component="h2" style={{fontSize: "12px"}} >
             <LocalParkingIcon fontSize="small" /> {''}{''} 
             	Free private parking available at the hotel
                  </Typography>
                  </span>
                  <br/>
                  <Button  className="main_button" href="/" ><b>Reserve</b></Button>
        </div>
    )
}

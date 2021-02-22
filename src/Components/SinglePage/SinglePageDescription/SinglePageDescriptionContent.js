import React from 'react'
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import SmokeFreeIcon from '@material-ui/icons/SmokeFree';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';

export default function SinglePageDescriptionContent({classes, tile}) {
    return (
        <div>
            
             <Typography  variant="body2" component="h2" style={{color: "#f6a82f", fontWeight: "800"}}>
             <StarBorderIcon /> {''}{''} One Of our best sellers in Pokhara
                  </Typography>
                  <br/>
              <Typography  variant="body2" component="h2" style={{fontSize: "12px"}}>{tile.description}</Typography>
              <br/><br/>
              <div>
              <Typography  variant="body2" component="h2">
              Most Popular Facilities
              </Typography> <br/>
              <span style={{display: "flex", flexWrap: "wrap"}}>
              <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
              <AirportShuttleIcon fontSize="small" color="primary" /> Airport shuttle
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <SmokeFreeIcon  fontSize="small" color="primary" /> {''}{''}  Non-smoking rooms
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <RoomServiceIcon fontSize="small"color="primary" /> {''}{''}  Room service
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <RestaurantIcon fontSize="small" color="primary" /> {''}{''}   Restaurant
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <LocalParkingIcon fontSize="small" color="primary" /> {''}{''} Free Parking
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <FreeBreakfastIcon  fontSize="small" color="primary" /> {''}{''}  Superb breakfast
                  </Typography>
              </span>
              <br/>
              <Typography  variant="body2" component="h2" style={{color: "blue", fontSize: "12px", fontWeight: "600"}}>
                   Good for Couples- they rate the facilities 8.5 for two-person stays.
                  </Typography>
              </div>
        </div>
    )
}

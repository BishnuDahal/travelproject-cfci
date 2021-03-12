import React from 'react'
import CardActions from '@material-ui/core/CardActions'
import Button  from '@material-ui/core/Button'
import Typography  from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import Tooltip from '@material-ui/core/Tooltip';
import HelpIcon from '@material-ui/icons/Help';

const longText = `
Meals: Breakfast is included in rooms rate.
Launch Cost NPR 423 per person per night.
Dinner Cost NPR 423 per person per night.
Cancellation: Free Cancellation
Payment: No pre Payment is Required
`;
export default function RoomsButtonSection() {
    return (
        <div>
             <ListItem style={{justifyContent:"space-between"}}>
                <Typography variant="h6" component="h2" >Days <br/><b>09</b></Typography>
                <Typography variant="h6" component="h2">Price <br/> <b>$200</b></Typography>
            </ListItem>
      <CardActions>
      <Button  className="main_button"><b>View More</b></Button>
      </CardActions>
      <span>
      <Tooltip title={longText} style={{backgroundColor: "#f0f8f7", padding: "2px", marginTop:"120px", fontSize: "12px", width:"150px", alignItems: "center"}}>
        <Typography variant="body2"  >
          <HelpIcon fontSize="small" fullWidth style={{color: "#f4af2f"}}/>Tour with flexible booking policy
          </Typography>
        </Tooltip>
      </span>
        </div>
    )
}

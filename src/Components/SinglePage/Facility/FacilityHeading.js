import React from 'react'
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

export default function FacilityHeading({tile}) {
    return (
        <div>
               <Typography  variant="h6" component="h2">2 Reasons to Choose {tile.title}</Typography><br/>
            <span style={{display: "flex", background: "#f4af1f", padding: "8px" }}>
            <List>
              <ListItem>
        <ListItemIcon><MonetizationOnIcon fontSize="medium" /></ListItemIcon>
        <b>Price You Cannot Beat</b>
        </ListItem>
        </List>
        <List>
              <ListItem>
        <ListItemIcon><SupervisedUserCircleIcon fontSize="medium" /></ListItemIcon>
        <b>The Staff Speak English</b>
        </ListItem>
        </List>
        </span>
        </div>
    )
}

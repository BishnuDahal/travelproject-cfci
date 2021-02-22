import React from 'react'
import Typography from '@material-ui/core/Typography';
import LocalAirportIcon from '@material-ui/icons/LocalAirport';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
export default function NearbySection() {
    return (
        <div>
              <List>
              <ListItem>
        <ListItemIcon><LocalAirportIcon /></ListItemIcon>
        <b>Closest Airports</b>
        </ListItem>
        </List>
        
        <List>
        <span style={{display: "flex", justifyContent: "space-around"}}>
            <ListItem>
           <Typography  variant="body2" component="h2">Pokhara Airport</Typography>
              </ListItem>
              <ListItem>
           <Typography  variant="body2" component="h2" color="textSecondary"> 0.6km</Typography>
              </ListItem>
            </span>
            <hr />
            <span style={{display: "flex", justifyContent: "space-around"}}>
            <ListItem>
           <Typography  variant="body2" component="h2">Bharatpur Airport</Typography>
              </ListItem>
              <ListItem>
           <Typography  variant="body2" component="h2" color="textSecondary"> 0.6km</Typography>
              </ListItem>
            </span>
            <hr />
            <span style={{display: "flex", justifyContent: "space-around"}}>
            <ListItem>
           <Typography  variant="body2" component="h2">Bhairawa Airport</Typography>
              </ListItem>
              <ListItem>
           <Typography  variant="body2" component="h2" color="textSecondary"> 0.6km</Typography>
              </ListItem>
            </span>
            <hr />
            
            </List>
        </div>
    )
}

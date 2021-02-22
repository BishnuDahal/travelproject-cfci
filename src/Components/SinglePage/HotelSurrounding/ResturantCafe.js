import React from 'react'
import Typography from '@material-ui/core/Typography';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
export default function NearbySection() {
    return (
        <div>
              <List>
              <ListItem>
        <ListItemIcon><RestaurantIcon /></ListItemIcon>
        <b>Restaurants & Cafe</b>
        </ListItem>
        </List>
        
        <List>
        <span style={{display: "flex", justifyContent: "space-around"}}>
            <ListItem>
           <Typography  variant="body2" component="h2">Cafe- Javista Cafe</Typography>
              </ListItem>
              <ListItem>
           <Typography  variant="body2" component="h2" color="textSecondary"> 0.6km</Typography>
              </ListItem>
            </span>
            <hr />
            <span style={{display: "flex", justifyContent: "space-around"}}>
            <ListItem>
           <Typography  variant="body2" component="h2">Restaurant- Pokhara Thakali kitchen</Typography>
              </ListItem>
              <ListItem>
           <Typography  variant="body2" component="h2" color="textSecondary"> 0.6km</Typography>
              </ListItem>
            </span>
            <hr />
            <span style={{display: "flex", justifyContent: "space-around"}}>
            <ListItem>
           <Typography  variant="body2" component="h2">cafe/bar- Himalayan Joe</Typography>
              </ListItem>
              <ListItem>
           <Typography  variant="body2" component="h2" color="textSecondary" > 0.6km</Typography>
              </ListItem>
            </span>
            <hr />
            <span style={{display: "flex", justifyContent: "space-around"}}>
            <ListItem>
           <Typography  variant="body2" component="h2">Restaurant- Tara Nepalese Restro(Vegetarian)</Typography>
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

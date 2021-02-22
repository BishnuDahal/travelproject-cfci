import React from 'react'
import Typography from '@material-ui/core/Typography';
import NearMeIcon from '@material-ui/icons/NearMe';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
export default function NearbySection() {
    return (
        <div>
              <List>
              <ListItem>
        <ListItemIcon><NearMeIcon /></ListItemIcon>
        <b>What's Nearby</b>
        </ListItem>
        </List>
        
        <List>
        <span style={{display: "flex", justifyContent: "space-around"}}>
            <ListItem>
           <Typography  variant="body2" component="h2">Fewa Lake</Typography>
              </ListItem>
              <ListItem>
           <Typography  variant="body2" component="h2" color="textSecondary"> 0.6km</Typography>
              </ListItem>
            </span>
            <hr />
            <span style={{display: "flex", justifyContent: "space-around"}}>
            <ListItem>
           <Typography  variant="body2" component="h2">World Peace Pagoda</Typography>
              </ListItem>
              <ListItem>
           <Typography  variant="body2" component="h2"  color="textSecondary"> 0.6km</Typography>
              </ListItem>
            </span>
            <hr />
            <span style={{display: "flex", justifyContent: "space-around"}}>
            <ListItem>
           <Typography  variant="body2" component="h2">Begnas Lake</Typography>
              </ListItem>
              <ListItem>
           <Typography  variant="body2" component="h2"  color="textSecondary"> 0.6km</Typography>
              </ListItem>
            </span>
            <hr />
            <span style={{display: "flex", justifyContent: "space-around"}}>
            <ListItem>
           <Typography  variant="body2" component="h2">International Mountain Museum</Typography>
              </ListItem>
              <ListItem>
           <Typography  variant="body2" component="h2"  color="textSecondary"> 0.6km</Typography>
              </ListItem>
            </span>
            <hr />
            <span style={{display: "flex", justifyContent: "space-around"}}>
            <ListItem>
           <Typography  variant="body2" component="h2">Mahendra Cave</Typography>
              </ListItem>
              <ListItem>
           <Typography  variant="body2" component="h2"  color="textSecondary"> 0.6km</Typography>
              </ListItem>
            </span>
            <hr />
            
            </List>
        </div>
    )
}

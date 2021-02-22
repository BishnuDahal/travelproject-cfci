import React from 'react'
import Typography from '@material-ui/core/Typography';
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
export default function NearbySection() {
    return (
        <div>
              <List>
              <ListItem>
        <ListItemIcon><EmojiNatureIcon /></ListItemIcon>
        <b>Natural Beauty</b>
        </ListItem>
        </List>
        
        <List>
        <span style={{display: "flex", justifyContent: "space-around"}}>
            <ListItem>
           <Typography  variant="body2" component="h2">Lake- Phewa</Typography>
              </ListItem>
              <ListItem>
           <Typography  variant="body2" component="h2" color="textSecondary"> 0.6km</Typography>
              </ListItem>
            </span>
            <hr />
            <span style={{display: "flex", justifyContent: "space-around"}}>
            <ListItem>
           <Typography  variant="body2" component="h2">Lake- Phewa Boating Area</Typography>
              </ListItem>
              <ListItem>
           <Typography  variant="body2" component="h2" color="textSecondary"> 0.6km</Typography>
              </ListItem>
            </span>
            <hr />
            <span style={{display: "flex", justifyContent: "space-around"}}>
            <ListItem>
           <Typography  variant="body2" component="h2">Lake- Begnas</Typography>
              </ListItem>
              <ListItem>
           <Typography  variant="body2" component="h2" color="textSecondary"> 0.6km</Typography>
              </ListItem>
            </span>
            <hr />
            <span style={{display: "flex", justifyContent: "space-around"}}>
            <ListItem>
           <Typography  variant="body2" component="h2">River- Devis Fall</Typography>
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

import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'


export default function RoomsFeatures({classes}) {
    return (
        <div>
        <List>
              <ListItem className={classes.listitem}>
                <Typography variant="body2" color="textSecondary" className={classes.body2} >TourPackages</Typography>
                <Typography variant="body1" color="textPrimary"  className={classes.body1}>GroupPackages</Typography>
            </ListItem>

            <ListItem className={classes.listitem}>
                <Typography variant="body2" color="textSecondary" className={classes.body2}>Operator</Typography>
                <Typography variant="body1" color="textPrimary" className={classes.body1}> World Expedition</Typography>
             </ListItem>

             <ListItem className={classes.listitem}>
                <Typography variant="body2" color="textSecondary" className={classes.body2}>Activities</Typography>
                <Typography variant="body1" color="textPrimary" className={classes.body1}>Trekking & Adventures</Typography>
            </ListItem>

             <ListItem className={classes.listitem}>
                <Typography variant="body2" color="textSecondary" className={classes.body2}>Accomodation</Typography>
                <Typography variant="body1" color="textPrimary" className={classes.body1}>Hotel</Typography>
            </ListItem>

            <ListItem className={classes.listitem}> 
                <Typography variant="body2" color="textSecondary" className={classes.body2}>Transport</Typography>
                <Typography variant="body1" color="textPrimary" className={classes.body1}>Train Bus Bullet & Private</Typography>
            </ListItem>

            <ListItem className={classes.listitem}> 
                <Typography variant="body2" color="textSecondary" className={classes.body2}>Age Range</Typography>
                <Typography variant="body1" color="textPrimary" className={classes.body1}>+18 years old</Typography>
            </ListItem>
            </List>
        </div>
    )
}

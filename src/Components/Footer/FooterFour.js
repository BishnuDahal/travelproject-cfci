import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {Link, Typography } from '@material-ui/core'


export default function FooterFour({classes}) {
    return (
        <div>
             <Typography variant="h6"  className= {classes.footerheader}>Footer Four</Typography> 
          <List>
       <ListItem>
            <Link to="/" className= {classes.menu_link}>Home</Link>
            </ListItem>
            <ListItem>
            <Link to="/" className= {classes.menu_link}>OUR Resorts</Link>
            </ListItem>
            <ListItem>
            <Link to="/" className= {classes.menu_link}>Special Offers</Link>
            </ListItem>
            <ListItem>
            <Link to="/" className= {classes.menu_link}>Gallery</Link> 
            </ListItem>
            <ListItem>
            <Link to="/" className= {classes.menu_link}>RESPLENDENT CEYLON</Link> 
            </ListItem>
       </List>
        </div>
    )
}

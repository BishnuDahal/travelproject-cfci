import React,{useState} from 'react'
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import { useTheme } from '@material-ui/core/styles';

export default function NabbarMenu({classes}) {
    const theme= useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
    return (
        <div>
             <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton 
             aria-label="open drawer"
             onClick={handleDrawerOpen}
             edge="start"
             className={clsx(classes.menuButton, open && classes.hide)}
           >
            <MenuIcon />
            </IconButton>
            {/* <CardMedia
          component="img"
          className={classes.cardmedia}
          alt="Contemplative Reptile"
          height="auto"
          image="/images/logo.jpg"
          title="Contemplative Reptile"
        /> */}
          <Typography variant="h6" className={classes.title}>
          <ul className= {classes.menu} >
            <Link to="/" className= {classes.menu_link}>Home</Link>
            <Link to="/" className= {classes.menu_link}>OUR Resorts</Link>
            <Link to="/" className= {classes.menu_link}>Special Offers</Link>
            <Link to="/" className= {classes.menu_link}>Gallery</Link> 
            <Link to="/" className= {classes.menu_link}>RESPLENDENT CEYLON</Link> 
        </ul>
          </Typography>
          <Button className={classes.icon} >
            </Button>
          <PersonIcon style={{ color:"#f4af1f" }}/><Link to="/" className= {classes.menu_link} style={{fontSize: "14px"}}>LOGIN</Link>
        </Toolbar>
        </AppBar>
        <Drawer
       className={classes.drawer}
       variant="persistent"
       anchor="left"
       open={open}
       classes={{
         paper: classes.drawerPaper,
       }}
     >
       <div className={classes.drawerHeader}>
         <IconButton onClick={handleDrawerClose}>
           {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
         </IconButton>
       </div>
       <Divider />
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
       <Divider />
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
     </Drawer>
        </div>
    )
}

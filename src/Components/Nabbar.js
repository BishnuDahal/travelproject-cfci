import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom'
import CardMedia from '@material-ui/core/CardMedia';
import PersonIcon from '@material-ui/icons/Person';


const drawerWidth = 240;

const useNabbarStyles = makeStyles((theme) => ({
  navroot: {
    position: 'relative',
    flexGrow: 1,
    justifyContent: 'space-around',
    margin: 'auto',
  },
  menu_link: {
    textDecoration: 'none',
    listStyleType: 'none',
    padding:' 0px 10px',
    fontSize: 'small',
    fontWeight: 800,
    color: '#f2f8fa',
    transition: '0.4s',
    letterSpacing: '0.1rem',
    '&:hover': {
      backgroundColor: '#6099F5',
      color: '#ffff',
      padding: '4px',
  },
},
  menuButton: {
    color: '#fff',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('lg')]: {
      display: 'none',
     },
     [theme.breakpoints.down('sm')]: {
      display: 'block',
     },

  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
     },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 4,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#6099F5',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  cardmedia: {
    maxWidth:'60px',
    maxHeight:'60px',
    borderRadius: '50%',
    background: 'transparent',
    objectFit: 'contain',
    margin: 'auto',
  },

}));

export default function ButtonAppBar() {
  const classes = useNabbarStyles();
  const theme = useTheme();
  const [root, setRoot] = useState(false);
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setRoot(true);
    }
    else {
      setRoot(false);
    }
  }
  window.addEventListener('scroll', changeBackground);

  return (
    <div className= { root ? 'nav active' : 'nav' } >
          {/* <CssBaseline />  */}
    <div className={classes.navroot}>
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
    </div>
  );
}

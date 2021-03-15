import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import NabbarMenu from '../../Components/Nabbar/NabbarMenu';
import useNabbarStyles from './NabbarStyle'
// import CardMedia from '@material-ui/core/CardMedia';

export default function Nabbar() {
 
  const classes = useNabbarStyles();
  const [root, setRoot] = useState(false);
  

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
    <div className= { root ? 'nav' : 'nav active' } >
           <CssBaseline />  
    <div className={classes.navroot}>
     <NabbarMenu classes={classes} />
       
    </div>
    </div>
  );
}

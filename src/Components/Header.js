import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

const useHeaderStyles = makeStyles((theme) => ({
    head: {
    position: 'relative',
    width: '96vw',
    height: '3vh',
    display: 'flex',
    backgroundColor: '#001',
    color: '#fff',
    margin: 'auto',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
       display: 'none',
      },
    },
    menu: {
        fontSize: 'small',
        alignItems: 'center',
        padding: '0px 4px',
    },
    menulink: {
        textDecoration: 'none',
        padding:' 0px 10px',
        fontSize: 'small',
        color: '#fff',
        transition: '0.4s',
        letterSpacing: '0.1rem',
    },

}))

export default function Header() {
    const classes = useHeaderStyles();
    const theme = useTheme();
    return (
        <div>
             <div className={classes.head}>
       <h2 style={{fontSize:'small'}}>+94 11 77 45730</h2>
         <ul className={classes.menu}>
            <Link to="/" className={classes.menulink}>CEYLON TEA TRAILS</Link>
             <Link to="/" className={classes.menulink}>CAPE WELIGAMA</Link>
             <Link to="/" className={classes.menulink}>RESPLENDENT CEYLON</Link>
       </ul>
       </div>
        </div>
    )
}

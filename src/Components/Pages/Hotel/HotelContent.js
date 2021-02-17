import React from 'react'
import { Link } from '@material-ui/core'
export default function HotelContent({classes}) {
    return (
        <div>
            <div className={classes.hotelcontent}>
              <ul style={{listStyleType:"circle"}} >
              <Link to="/" className= {classes.menu_link}>
                  <li style={{color: "#f59430"}}>
                  <span style={{display: 'flex'}}>
                      <b style={{color: "#000000"}}>Hotels</b>
                      <hr color= "#f59430" style={{width:'60px', marginLeft:'10px'}} />
                       </span>
                       </li>
                  </Link><br/>
              <Link to="/" className= {classes.menu_link}><li>Flights</li></Link><br/>
              <Link to="/" className= {classes.menu_link}><li>Tours & Tickets</li></Link><br/>
              <Link to="/" className= {classes.menu_link}><li>Attractions</li></Link><br/>
              <Link to="/" className= {classes.menu_link}><li>Hot Deals</li></Link><br/>
              </ul>
              </div>
        </div>
    )
}

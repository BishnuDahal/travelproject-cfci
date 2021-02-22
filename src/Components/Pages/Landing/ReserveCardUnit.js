import React from 'react'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Search from './Search';
import DateRange from './DateRange';
import OtherComponent from './OtherComponent';
import Box from '@material-ui/core/Box';
import LocalHotelTwoToneIcon from '@material-ui/icons/LocalHotelTwoTone';
import FlightTwoToneIcon from '@material-ui/icons/FlightTwoTone';
import ConfirmationNumberTwoToneIcon from '@material-ui/icons/ConfirmationNumberTwoTone';


const defaultProps = {
    bgcolor: 'background.paper',
    // m: 1,
    mb:3,
    style: { width: '70px', height: '5px' },
  };
export default function ReserveCardUnit({classes}) {

    return (
        <div className={classes.reservePageCard}>
          <div className={classes.reservecontent}>
          <Box display="flex" flexWrap="nowrap">
          <span className={classes.abouticon} ><center><LocalHotelTwoToneIcon className={classes.aboutbutton} fontSize="small" /></center><br/></span>
          <span className={classes.abouticon}><center><FlightTwoToneIcon className={classes.aboutbutton}  fontSize="small" /></center><br/></span>
          <span className={classes.abouticon}><center><ConfirmationNumberTwoToneIcon className={classes.aboutbutton}  fontSize="small" /></center><br/></span>
      </Box>
            <Typography variant="h6">
Find the Best Hotel </Typography>
            <Box display="flex" justifyContent="start">
      <Box {...defaultProps} borderTop={2} />
      </Box>
    
           <div className={classes.reserveitem}>
<div className={classes.search}>
<Search />
</div>
<br/>
    <div  className={classes.daterangepicker} >
<DateRange />
</div><br/>  
<div className={classes.smalldetails}>
<OtherComponent />
</div><br/>
<span ><Button  className="main_button" href="/" ><b>Search</b></Button></span>
        </div>
        </div>
        </div>
            
    )
}

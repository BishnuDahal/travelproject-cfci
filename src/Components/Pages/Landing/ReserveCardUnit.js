import React from 'react'
import { Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import Search from './Search';
import DateRange from './DateRange';
import OtherComponent from './OtherComponent';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';



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
            <Typography variant="h6">
Find the Best Hotel </Typography>
            <Box display="flex" justifyContent="start">
      <Box {...defaultProps} borderTop={2} />
      </Box>
      <br/>
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
<span className="main_button" style={{padding: "12px", alignItems: "right"}}><Button endIcon={<ArrowRightIcon />} href="/" >Search </Button></span>
        </div>
        </div>
        </div>
            
    )
}

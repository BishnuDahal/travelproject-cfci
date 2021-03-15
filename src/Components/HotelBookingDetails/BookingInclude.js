import React from 'react';
import {CardContent, Typography} from "@material-ui/core";

const BookingInclude = (props) => {
  return (
    <>
      <CardContent>
        <Typography style={{color: '#008009'}}>Free WiFi</Typography>
        <Typography style={{color: '#008009'}}>Free parking</Typography>
      </CardContent>
    </>
  );
}

export default BookingInclude;
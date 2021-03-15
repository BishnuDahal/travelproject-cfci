import React from 'react';
import {CardContent, Typography} from "@material-ui/core";

const Cancellation = (props) => {
  return (
    <>
      <CardContent>
        <Typography gutterBottom  style={{color: '#008009'}}>FREE cancellation until 23:59 on 9 Mar</Typography>
        <div style={{display: 'flex', justifyContent:'space-between'}}>
          <Typography style={{marginTop: '.6rem'}}>From 00:00 on 10 Mar</Typography>
          <Typography variant="overline">NPR 3,707 *</Typography>
        </div>
      </CardContent>
    </>
  );
}

export default Cancellation;
import React from 'react';
import CardContent from "@material-ui/core/CardContent";
import {Typography} from "@material-ui/core";

const PaymentSchedule = (props) => {
  return (
    <>
      <CardContent>
        <Typography style={{color: '#008009'}}>No payment today. You'll pay when you stay.</Typography>
      </CardContent>
    </>
  );
}

export default PaymentSchedule;
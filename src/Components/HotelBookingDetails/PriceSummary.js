import React from 'react';
import {CardContent, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {StyledDivider} from "../../Reusable/reusableComponents";

const usePriceSummary = makeStyles(theme => ({
  contentH: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
    paddingBottom: theme.spacing(0),
  },
  contentHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },


}))
const PriceSummary = (props) => {
  const classes = usePriceSummary()
  return (
    <>
      <CardContent className={classes.contentH}>
        <Grid container>
          <Grid item xs={12} style={{marginBottom: '.5rem'}}>
            <div className={classes.contentHeader}>
              <Typography gutterBottom>Deluxe Room</Typography>
              <Typography gutterBottom>NPR 2,982</Typography>
            </div>
            <div className={classes.contentHeader}>
              <Typography gutterBottom>24.30 % VAT</Typography>
              <Typography gutterBottom>NPR 725</Typography>
            </div>
          </Grid>
        </Grid>
      </CardContent>

      <CardContent style={{backgroundColor: '#f4ebe4', paddingTop: '.5rem'}}>
        <Grid item xs={12}>
          <div className={classes.contentHeader}>
            <div style={{marginBottom: '.5rem'}}>
              <Typography variant="overline">Price</Typography>
              <Typography gutterBottom style={{lineHeight: '.1rem'}}>(your currency)</Typography>
            </div>
            <div>
              <Typography variant="overline">NPR 3,707 *</Typography>
            </div>
          </div>
          <StyledDivider/>


          <div className={classes.contentHeader}>
            <div style={{marginTop: '.5rem'}}>
              <Typography>Property currency in USD</Typography>
              <Typography style={{lineHeight: '.7rem'}} color="textSecondary">(for 2 guests)</Typography>
            </div>
            <div>
              <Typography variant="overline">US$31.50</Typography>
            </div>
          </div>
        </Grid>
      </CardContent>
      <CardContent>
        <Typography>
          * This price is converted to show you the approximate cost in NPR.
          You'll pay in US$ or NPR. The exchange rate may change before you pay.
          Bear in mind that your card issuer may charge you a foreign transaction fee.
        </Typography>
      </CardContent>


    </>
  );
}

export default PriceSummary;
import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useGoodToKnow = makeStyles(theme => ({
  goodToKnowWrapper: {
    marginTop: '1rem',
    padding: '1rem',
    border: "1px solid rgba(0, 0, 0, 0.2)",
  },

  icon:{
    color: '#008009'
  },

  contentWrap: {
    display: 'flex',
    marginBottom: '.5rem',
    marginTop: '.5rem',
  },

  content: {
    marginLeft: '.5rem',
    fontFamily: 'Lato',
    fontSize: 15,
    fontWeight: 600,

  },

  small:{
    marginLeft: '.5rem',
    fontSize: 16,
    fontWeight: 500,
  },

}))

const GoodToKnow = (props) => {
  const classes = useGoodToKnow()
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.goodToKnowWrapper}>
        <Typography variant="h3" >
          Good to know:
        </Typography>
        <div className={classes.contentWrap}>
          <CheckCircleOutlineIcon className={classes.icon}/>
          <Typography className={classes.content}>FREE cancellation
          <span className={classes.small}>before 23:59 on 9 March 2021 </span>
          </Typography>
        </div>
        <div className={classes.contentWrap}>
          <CheckCircleOutlineIcon className={classes.icon}/>
          <Typography className={classes.content}>No payment needed today.
            <span className={classes.small}>You'll pay when you stay. </span>
          </Typography>
        </div>
      </Grid>
    </Grid>

  );
}

export default GoodToKnow;
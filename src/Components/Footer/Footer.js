import React from 'react'
import useFooterStyles from "./FooterStyle";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FooterSocial from './FooterSocial';
import FooterOne from './FooterOne';
import FooterTwo from './FooterTwo';
import CardMedia from '@material-ui/core/CardMedia';
import FooterThree from './FooterThree';
import FooterFour from './FooterFour';


export default function Footer() {
  const classes = useFooterStyles();
    return (
        <div>
          <div className={classes.footer}>
          <CardMedia
          component="img"
          className={classes.cardmedia}
          alt="Contemplative Reptile"
          height="auto"
          image="/images/logo.jpg"
          title="Contemplative Reptile"
        /><br />
              <Grid container spacing={1}>


               <Grid item lg={3} md={3} sm={4} xs={6}>
          <Paper className={classes.paper}>
            <FooterOne  classes={classes}/>
          </Paper>
        </Grid>


        <Grid item lg={3} md={3} sm={4} xs={6}>
        <Paper className={classes.paper}>
        <FooterTwo  classes={classes}/>
          </Paper>
        </Grid>


        <Grid item lg={3} md={3} sm={4} xs={6}>
        <Paper className={classes.paper}>
          <FooterThree classes={classes}/>
          </Paper>
        </Grid>


        <Grid item lg={3} md={3} sm={4} xs={6}>
        <Paper className={classes.paper}>
      <FooterFour classes={classes}/>
          </Paper>
        </Grid>
      </Grid><br /><br />

      
      <hr />
      <FooterSocial classes={classes} />
      </div>
        </div>
    )
}

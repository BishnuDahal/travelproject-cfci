import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { List,Typography } from '@material-ui/core';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    // color: theme.palette.text.secondary,
    background: 'transparent',
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
              <List>
                  <Typography  variant="body2" component="h2">
                  <AirportShuttleIcon fontSize="small"  /> <b>Bathroom</b>
                  </Typography> <br/>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Airport shuttle
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Toilet Papers
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Toilet Papers
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Toilet Papers
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Toilet Papers
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Toilet Papers
                  </Typography>
              </List>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <List>
                  <Typography  variant="body2" component="h2">
                  <AirportShuttleIcon fontSize="small"  /> <b>Living Area</b>
                  </Typography> <br/>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Airport shuttle
                  </Typography>
                  </List>
                  <List>
                  <Typography  variant="body2" component="h2">
                  <AirportShuttleIcon fontSize="small"  /> <b>Media & Technology</b>
                  </Typography> <br/>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Airport shuttle
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Airport shuttle
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Airport shuttle
                  </Typography>
                  </List>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <List>
                  <Typography  variant="body2" component="h2">
                  <AirportShuttleIcon fontSize="small"  /> <b>Food & Drinks</b>
                  </Typography> <br/>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Airport shuttle
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Toilet Papers
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Toilet Papers
                  </Typography>
                  </List>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <List>
                  <Typography  variant="body2" component="h2">
                  <AirportShuttleIcon fontSize="small"  /> <b> Safety & Security</b>
                  </Typography> <br/>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Airport shuttle
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Toilet Papers
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Toilet Papers
                  </Typography>
                  </List>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <List>
                  <Typography  variant="body2" component="h2">
                  <AirportShuttleIcon fontSize="small"  /> <b>General </b>
                  </Typography> <br/>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Airport shuttle
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Toilet Papers
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Toilet Papers
                  </Typography>
                  </List>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <List>
                  <Typography  variant="body2" component="h2">
                  <AirportShuttleIcon fontSize="small"  /> <b> Internet </b>
                  </Typography> <br/>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Airport shuttle
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Toilet Papers
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Toilet Papers
                  </Typography>
                  </List>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
              <List>
                  <Typography  variant="body2" component="h2">
                  <AirportShuttleIcon fontSize="small"  /> <b> Parking</b>
                  </Typography> <br/>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Airport shuttle
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Toilet Papers
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Toilet Papers
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Toilet Papers
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Toilet Papers
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Toilet Papers
                  </Typography>
              </List>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <List>
                  <Typography  variant="body2" component="h2">
                  <AirportShuttleIcon fontSize="small"  /> <b>Wifi </b>
                  </Typography> <br/>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Airport shuttle
                  </Typography>
                  </List>
                  <List>
                  <Typography  variant="body2" component="h2">
                  <AirportShuttleIcon fontSize="small"  /> <b> Media & Technology</b> 
                  </Typography> <br/>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Airport shuttle
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Airport shuttle
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Airport shuttle
                  </Typography>
                  </List>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <List>
                  <Typography  variant="body2" component="h2">
                  <AirportShuttleIcon fontSize="small"  /> <b> Front Desk Services</b>
                  </Typography> <br/>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Airport shuttle
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Toilet Papers
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Toilet Papers
                  </Typography>
                  </List>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <List>
                  <Typography  variant="body2" component="h2">
                  <AirportShuttleIcon fontSize="small"  /> <b> Kitchen</b>
                  </Typography> <br/>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Airport shuttle
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Toilet Papers
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Toilet Papers
                  </Typography>
                  </List>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <List>
                  <Typography  variant="body2" component="h2">
                  <AirportShuttleIcon fontSize="small"  /> <b> Transportation</b>
                  </Typography> <br/>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Airport shuttle
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Toilet Papers
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Toilet Papers
                  </Typography>
                  </List>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <List>
                  <Typography  variant="body1" component="h2">
                  <AirportShuttleIcon fontSize="small"  /> <b> Activities</b>
                  </Typography> <br/>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Airport shuttle
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Toilet Papers
                  </Typography>
                  <Typography  variant="body2" component="p" style={{fontSize: "12px", padding: "8px"}} >
                  <CheckCircleOutlineIcon fontSize="small"  /> Toilet Papers
                  </Typography>
                  </List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}


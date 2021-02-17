import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import finalformimage from '../assets/finalformimage.jpg'
import { Typography } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Form from './Form';

const useLoginPageStyles = makeStyles((theme) => ({
    loginpage: {
        position: 'relative',
        width: "96vw",
        height: "80vh",
        margin: 'auto',
    },
    loginimage: {
        overflow: 'hidden',
        width: '100%',
        height: '90%',
        backgroundImage:`url(${finalformimage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex:  '-1',
    },
    loginmaincontent: {
        position: 'absolute',
        top: '10%',
        left: '20%',
        maxWidth: '60%',
        letterSpacing: '1px',
        color: 'grey',
    },
    paper: {
        padding: theme.spacing(2),
        // color: theme.palette.text.secondary,
        backgroundColor: 'transparent',
      },
}))
export default function SignUp() {
    const classes = useLoginPageStyles();
    return (
       <div className={classes.loginpage}>
           {/* <div className={classes.loginimage}>
       </div>
       <Typography variant="h6" className={classes.loginmaincontent}>
       Lorem ipsum dolor sit amet, Eum quasi quidem quibusdam. consectetur adipisicing elit. Quos blanditiis tenetur
       unde suscipit dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
     </Typography> */}
      <div style={{margin: '20px'}}>
      <Grid container spacing={3}>
      <Grid item xs={6}>
          <Paper className={classes.paper}>
          <b><Typography variant="h4">Let's More Buisness </Typography></b><br/><br/>
          <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
              <Form />
          </Paper>
        </Grid>
        </Grid>
        </div>
        </div>
    )
}

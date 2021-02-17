import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import flower from './assets/flower.jpg'
import Grid from '@material-ui/core/Grid';
import LoginForm from './LogInForm';
import Box from '@material-ui/core/Box';


const useLoginPageStyles = makeStyles((theme) => ({
    logincontent: {
        width: '90vw',
        alignItems: 'center',
        padding: theme.spacing(5),
        borderRadius: "20px",
        margin: "auto",
        marginTop: '10px',
        // background: 'blue',
         opacity: '4',
        // boxShadow: '50px',
    },
    login__imagecontainer: {
        maxWidth: '580px',
        height: '400px',
        background: '#FFF',
        padding: theme.spacing(1),
    },
    login__image: {
        width: '100%',
        height: '100%',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        alignItems: 'center',
        '&:hover': {
        //    animation: `$myEffect 4s infinite`,
        boxShadow:' 0 14px 28px red',
        //   ${theme.transitions.easing.easeInOut}
        },
    },
//    "@keyframes myEffect": {
//        "0%": {transform: "translate(1px, 1px) rotate(0deg)"},
//        "10%": {transform: "translate(-1px, -2px) rotate(-1deg)"},
//        "20%": {transform: "translate(-3px, 0px) rotate(1deg)"},
//        "30%": {transform: "translate(3px, 2px) rotate(0deg)"},
//        "40%": {transform: "translate(1px, -1px) rotate(1deg)"},
//        "50%": {transform: "translate(-1px, 2px) rotate(-1deg)"},
//        "60%": {transform: "translate(-3px, 1px) rotate(0deg)"},
//        "70%": {transform: "translate(3px, 1px) rotate(-1deg)"},
//        "80%": {transform: "translate(-1px, -1px) rotate(1deg)"},
//        "90%": {transform: "translate(1px, 2px) rotate(0deg)"},
//        "100%": {transform: "translate(1px, -2px) rotate(-1deg)"},

//      },
   login__form: {
        background: '#FFF',
        alignItems: 'center',
    },
    login__formcontent: {
        width: '100%',
        fontSize: 'small',
        padding: theme.spacing(4),
    },
    boxshadowcontainer: {
        boxShadow:'0 14px 28px blue',
    },
  
}))

export default function Login() {
    const classes = useLoginPageStyles();
    return (
        <>
        <div >
            <Grid container spacing={1} className={classes.logincontent}>
            <Grid item className={classes.login__container} xs={12} md={6} lg={6}>
            <Box boxShadow={3} className={classes.boxshadowcontainer} >
                <div className={classes.login__imagecontainer}>
                <img 
            src={flower}
            alt="login-image"
            className={classes.login__image}
            />
                </div>
                </Box>
                </Grid>
                <Grid item className={classes.login__form} xs={12} md={6} lg={6}>
                <Box boxShadow={3} className={classes.boxshadowcontainer} >
            <div className={classes.login__formcontent}>
            <LoginForm />
        </div>
        </Box>
        </Grid>
        </Grid>
        </div>
        </>
    )
}

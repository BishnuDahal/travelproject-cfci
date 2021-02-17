import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockIcon from '@material-ui/icons/Lock';
import {Link, Typography }  from '@material-ui/core'
import FacebookLog from '../Social/FacebookLogin';
import GoogleLog from '../Social/GoogleLogin';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';


const useLoginFormStyles = makeStyles((theme) => ({
    formfielditems: {
        maxWidth: '60%',
        margin: 'auto',
    },
    input: {
        marginBottom: '3px',
        opacity: 1,
        [`& fieldset`]: {
          borderRadius: '20px',
        },
    },
    login__signInButton: {
        borderRadius: '20px', 
        padding: theme.spacing(1),
    },
    menu_link: {
        textDecoration: 'none',
        listStyleType: 'none',
        padding:' 0px 10px',
        fontSize: 'small',
        transition: '0.4s',
        letterSpacing: '0.1rem',
        '&:hover': {
            color: 'red',
      },
    },
}))
const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const LoginForm = () => {
  const classes = useLoginFormStyles();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={classes.formfielditems}>
      <form onSubmit={formik.handleSubmit}>
        <div >
        <Typography variant="h5" style={{textDecorationLine: "underline" }} > <b>LOGIN</b></Typography><br/>
          
        <TextField
          fullWidth
          className={classes.input}
          id="email"
          name="email"
          type="email" 
          placeholder="Enter Your Email" 
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon style={{color: "#f6a82f"}}/>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          className={classes.input}
          id="password"
          name="password"
          type="password"
          placeholder="Enter Your Password" 
          variant="outlined"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon style={{color: "#f6a82f"}}/>
              </InputAdornment>
            ),
          }}
        />
        </div>
        <p style={{textAlign: 'right', marginTop: '-2px', fontSize: 'small'}}>Forgot Password?</p>
        <Button className="main_button"  type="submit" fullWidth>
         LOGIN
        </Button><br/><br/>
        <div style={{textAlign: 'center'}}> 
        <Typography variant="h5">Or <b> Sign In With </b></Typography> <br/>
        <div style={{display:"flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center"}}>
        <span>
         <TwitterIcon className="facebook_button"  color="primary"/>
         <FacebookIcon  className="facebook_button" color="primary"/>
         <InstagramIcon className="facebook_button"  color="primary"/>
         <EmailIcon  className="facebook_button" color="primary"/>
         </span>
         <Link href="false" target="_blank" rel="noopener noreferrer" 
      style={{border:"none", textDecoration:"none", backgroundColor: "transparent"}}>
      <img src="https://www.niftybuttons.com/googleplay/googleplay-button1.png"  />
        </Link>
         </div>
         </div>
      </form>
    </div>
  );
};

export default LoginForm;

// 271497597850-4fko20rq2o86lmkl5l8moiid08b1q2a8.apps.googleusercontent.com
// TFN5QTZWKtD_CXBGp2nvl3aO
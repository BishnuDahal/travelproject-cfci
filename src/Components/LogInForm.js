import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Link } from 'react-router-dom'
import { Typography }  from '@material-ui/core'
import FacebookLog from './Social/FacebookLogin';
import GoogleLog from './Social/GoogleLogin';




const useLoginFormStyles = makeStyles((theme) => ({
  testfielditems:{
    width: '80%',
  },
    input: {
        marginBottom: '10px',
        opacity: 0.7,
        [`& fieldset`]: {
          borderRadius: '30px',
        },
    },
    login__signInButton: {
        width: '30%',
        padding: theme.spacing(1),
        marginBottom: '10px',
        marginLeft: '25%',
        borderRadius: '30px',
        alignItems: 'center',
        boxShadow:' 2px red',
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
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className={classes.testfielditems}>
        <Typography variant="h4">Member LogIn</Typography><br/>
          
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
                <EmailIcon color="primary"/>
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
                <LockIcon color="primary"/>
              </InputAdornment>
            ),
          }}
        />
        </div><br/>
        <Button className={classes.login__signInButton} color="primary" variant="contained"  type="submit">
          SIGN IN
        </Button><br/><br/>
        <div style={{textAlign: 'center', width: '80%'}}> 
        <Typography variant="h5">Or <b> Sign In With </b></Typography> <br/>
        <div style={{display:"flex", flexWrap: "wrap", marginLeft: "30%"}}>
        <FacebookLog /> 
         <GoogleLog />
         </div>
         <p><b>Don't Have an Account?</b></p><Link to="/" className={classes.menu_link}><b>Signup Now<ArrowRightAltIcon fontSize="small"></ArrowRightAltIcon></b></Link>
         </div>
        {/* <Link to="/" className={classes.menu_link}>Forgot Username/Password?</Link><br/>
            <Link to="/" className={classes.menu_link}>Account not Verified yet<ArrowRightAltIcon fontSize="small"></ArrowRightAltIcon></Link><br/>
            <Link to="/" className={classes.menu_link}>Create your Account <ArrowRightAltIcon fontSize="small"></ArrowRightAltIcon></Link> */}
      </form>
    </div>
  );
};

export default LoginForm;

// 271497597850-4fko20rq2o86lmkl5l8moiid08b1q2a8.apps.googleusercontent.com
// TFN5QTZWKtD_CXBGp2nvl3aO
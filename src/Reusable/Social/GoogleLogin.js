import React from 'react'
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
    console.log(response);
  }
export default function GoogleLog() {
    let googleContent;
    googleContent = (
        <GoogleLogin
        clientId="271497597850-4fko20rq2o86lmkl5l8moiid08b1q2a8.apps.googleusercontent.com"
        buttonText="Google"
        icon={false}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        size="small"
        className="google_button"
      />
    )
    return (
        <div>
            {googleContent}
        </div>
    )
}

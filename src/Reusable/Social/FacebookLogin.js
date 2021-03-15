 import React from 'react';
 import FacebookLogin from 'react-facebook-login'
 import FacebookIcon from '@material-ui/icons/Facebook';
 import Button from '@material-ui/core/Button';
;

 const responseFacebook = (response) => {
    console.log(response, 'response');
  }
  const componentClicked = () => {
      console.log('clicked')
  }
export default function FacebookLog() {
    let fbContent;
    fbContent = (
        <FacebookLogin
appId="434867700982791"
autoLoad={false}
fields="name,email,picture"
onClick={componentClicked}
callback={responseFacebook}
cssClass="facebook_button"
size="small"
icon={<Button style={{backgroundcolor: "white"}}>{<FacebookIcon />}</Button>}
 textButton = ""
/>
)
    return (
        <div>
       {fbContent}
        </div>
    )
}

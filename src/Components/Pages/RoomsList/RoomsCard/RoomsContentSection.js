import React, {useState} from 'react'
import RoomsFeatures from './RoomsFeatures';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';


export default function RoomsContentSection({classes}) {
    const [value, setValue] = useState(5);

    return (
        <div>
            <CardContent>
          <Typography variant="h6">
            <b>Hotel Yak and Yeti</b>
          </Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        /> <br/>
          <span style={{display: 'flex'}}>
          <Typography variant="body2" color="textSecondary" className={classes.body2}>
          <b style={{color: "#f4af2f"}}>⤵</b> {""} Best Price Guarenteed
          </Typography>
          <Typography variant="body2" color="textSecondary" className={classes.body2} style={{marginLeft: "20px"}}>
          <b style={{color: "#f4af2f"}}>⤵</b>{""} No Booking Fees
          </Typography>
          </span>
          <Typography  variant="body2"  style={{fontSize: "13px",marginTop: "8px", fontWeight: "300", letterSpacing:"0.5px"}}>
          Yak and Yeti is a heritage hotel located in Durbar Marg, the thriving city center of Kathmandu Valley, in a prime location that is minutes walking distance from the former Royal Palace. 
          </Typography>
          <div>
            <RoomsFeatures classes={classes}/>
          </div>
        </CardContent>
        </div>
    )
}

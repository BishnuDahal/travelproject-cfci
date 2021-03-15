import React, {useState} from 'react'
import RoomsFeatures from './RoomsFeatures';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import Rating from '@material-ui/lab/Rating';


export default function RoomsContentSection({classes, item}) {
  console.log(item, 'roomscontentsection')
    // const [value, setValue] = useState(5);

    return (
        <div>
            <CardContent>
          <Typography variant="h6">
            <b>{item.hotel_name}</b>
          </Typography>
        {/* <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        /> <br/> */}
          <Typography  variant="body2" component="h2" style={{display: "flex",alignItems: "center", color: "#f6a82f"}}>
            {item.hotel_star_rating}
            </Typography> 
          <span style={{display: 'flex'}}>
          <Typography variant="body2" color="textSecondary" className={classes.body2}>
          <b style={{color: "#f4af2f"}}>⤵</b> {""} Best Price Guarenteed
          </Typography>
          <Typography variant="body2" color="textSecondary" className={classes.body2} style={{marginLeft: "20px"}}>
          <b style={{color: "#f4af2f"}}>⤵</b>{""} No Booking Fees
          </Typography>
          </span>
          <Typography  variant="body2"  style={{fontSize: "13px",marginTop: "8px", fontWeight: "300", letterSpacing:"0.5px"}}>
          {item.hotel_description.length > 150 ?
    `${item.hotel_description.substring(0, 150)}...` : item.hotel_description
  }
          </Typography>
          <div>
            <RoomsFeatures classes={classes}/>
          </div>
        </CardContent>
        </div>
    )
}

import React, {useState, useEffect} from 'react'

import axios from 'axios';
import qs from "query-string"
import CardSection from './CardSection';

import { makeStyles } from '@material-ui/core/styles';

const useHotelListStyles = makeStyles((theme) => ({
  hotellist: {
         position: 'relative',
         overflow: 'hidden',
         width: '98%',
         margin: 'auto',
         alignItems: 'center',
         padding: theme.spacing(3),
     },
}))

export default function OfferCardUnit() {
    const [value, setValue] = useState();
    const [items, setItems] = useState([]);
    const classes = useHotelListStyles();

    const enteredData = {
      checkout: '2019-12-21',
      checkin: '2019-12-20',
      location:'kathmandu',
      no_adult: 1,
      no_infant: 0,
      no_child: 0,
}

useEffect( () => {
   axios({
      method: 'POST',
      url: "/booking/api/first_hotel_list/",
      headers: {
          "Authorization": "Token 03613e85a33fd6152c1399f68753d7840fb71eb0",
          "Content-Type": "application/x-www-form-urlencoded"
      },
      data: qs.stringify(enteredData)
  })
  .then(res => 
     setItems(res.data.data)
  )
}, [])
console.log(items, "hotelitemsreceived");
        
    return (
      <div>
        {/* // <div className={classes.hotellist}>  */}
           {items.map(item => <div
            key={item.hotel.cino}>
              <CardSection  cardItem = {item} />
    </div>
    )}
        </div>
    )
}

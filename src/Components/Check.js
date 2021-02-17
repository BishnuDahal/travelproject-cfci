import React, {useState, useEffect} from 'react'
import axios from 'axios';
import qs from "query-string"

export default function Check() {
    const [items, setItems] = useState([]);
 
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
    console.log(items, "itemsreceived");

    // useEffect(() => {
    //     axios.post(`/booking/api/availableInv/`, {
    //         hotel_id: '1',
    //         checkout: '2021-0-13',
    //         checkin: '2021-02-10',
    //         location:'kathmandu',
    //         no_adult: '2',
    //         no_infant: '0',
    //         no_child: '0',
    //         page: '1',
    //         limit: '36',
    //     }, {header: {'Access-Control-Allow-Origin': '*'}})
    //     .then(res => {
    //         console.log(res, "received");
    //         // setItems(res.data);
    //     })
    //     .catch(error => {
    //         console.log(error, "error found")
    //     })
    // }, [])
   
    // `${item.hotel.image}`
    return (
        <div>
           {items
        ? items.map(item => {
            return <div key={item.gallery[0].id}>{item.address.address}<br />
           <img src={item.gallery[0].image} alt ="hotel_image" /> <br />
           {/* <img src={item.hotel.image} alt ="hotel_image" /> <br /> */}
           {item.hotel.cname}
            </div>;
          })
        : "Loading..."}
      </div>
    )
}

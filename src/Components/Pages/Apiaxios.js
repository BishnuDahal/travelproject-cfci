import React, {useState, useEffect} from 'react'
import axios from 'axios';

export default function Apiaxios() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const hotelData= {
        hotel_id: 1,
      }
  
  const HotelById = async () => {
    setIsLoading(true) 
    const response = await axios({
      method: 'POST',
      url: `/booking/api_v_1/hotel_search_by_id/`,
      headers: {
        'content-type': 'application/json'
    },
    data: hotelData
  })
  const data = await response.data;
  console.log(data);
  }
  useEffect(() => {
    HotelById();
  }, [])
    return (
        <div>
            <h2>Axios Api</h2>
        </div>
    )
}

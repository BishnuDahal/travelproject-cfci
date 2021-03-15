import {useEffect, useState} from 'react';
import axios from "axios";
import qs from "query-string";

const usePost = (URL) => {
  const [isLoading, setIsLoading] = useState(false)
  const [hotelData, setHotelData] = useState([])
  const [error, setError] = useState(null);

  const enteredData = {
    checkout: '2019-12-21',
    checkin: '2019-12-20',
    location: 'kathmandu',
    no_adult: 1,
    no_infant: 0,
    no_child: 0,
  }

  const postSearchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios({
        method: 'POST',
        url: URL,
        headers: {
          "Authorization": "Token 03613e85a33fd6152c1399f68753d7840fb71eb0",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: qs.stringify(enteredData)
      })
      const data = await response.data.hotel_list;
      // console.log(response)
      if(response.status === 200) {
        setHotelData(data);
        setIsLoading(false);
        setError(null);
      }

    } catch (e) {
      setIsLoading(false);
      setError(e.message);
    }

  }

  useEffect(() => {
   postSearchData();

  }, []);

  return { isLoading, hotelData, error}
};

export default usePost;

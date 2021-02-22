import React, {useState, useEffect} from 'react'
import SearchIcon from '@material-ui/icons/Search';

import axios from 'axios';
import qs from "query-string"

export default function SearchHotel() {
    const [items, setItems] = useState([{}]);
    const [isLoading, setIsLoading] = useState(false)

let query;
let searchText;

const enteredData = {
  checkout: '2019-12-21',
  checkin: '2019-12-20',
  location:'kathmandu',
  no_adult: 1,
  no_infant: 0,
  no_child: 0,
}
 const onSearchChange = e => {
      searchText = e.target.value;
  }
  const handleSubmit = e => {
    e.preventDefault();
    performSearch(query.value);
    e.currentTarget.reset();
  }

   const performSearch = (query = '') => {
    setIsLoading(true)
    axios({
        method: 'POST',
        url: `/booking/api/first_hotel_list/?q=${query}`,
        headers: {
            "Authorization": "Token 03613e85a33fd6152c1399f68753d7840fb71eb0",
             "Content-Type": "application/x-www-form-urlencoded"
        },
        data: qs.stringify(enteredData)
    })
    .then(res => 
        {
          console.log(res.data.hotel_list)
          setItems(res.data.hotel_list)
          setIsLoading(false)
       }
     )
       .catch(error => {
         console.log('Error fetching and parsing data', error);
       });
    }

useEffect( () => {
    performSearch();
}, [])  
 
    return (
      <>
      <form className="search-form" onSubmit={handleSubmit} >
        <label className="is-hidden" htmlFor="search">Search</label>
        <input type="search"
               onChange={onSearchChange}
               name="search"
              ref={(input) => query = input}
            // value={query}
               placeholder="Search..." />
             <button type="submit" id="submit" className="search-button"><SearchIcon /></button>
      </form>
      <>
      {items.map(item => <>
      {item.image}
      </>)}
      </>
      </>
    );
  
}
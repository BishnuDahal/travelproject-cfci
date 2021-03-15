import React, {useState, useEffect} from 'react'
import { Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Search from '../../Reusable/Search';
import DateRange from '../../Reusable/DateRange';
import OtherComponent from '../../Reusable/OtherComponent';
import { Formik, Form } from "formik";
 import { useHistory } from "react-router-dom";
import axios from 'axios';
import ValidationSchema from '../../Utils/FormikData/ValidationSchema';
import initialValues from '../../Utils/FormikData/InitialValues';

const defaultProps = {
  bgcolor: 'background.paper',
  // m: 1,
  mb:3,
  style: { width: '70px', height: '5px' },
};

export default function ReserveCardUnit({classes}) {
   const [items, setItems] = useState([]);
   const [isLoading, setIsLoading] = useState(false)
   const { push } = useHistory();
    const searchData= {
      location:'kathmandu',
      number_of_adult: 1,
      number_of_child: 0,
      number_of_infant: 0,
      check_in_date: 2019-12-20,
      check_out_date: 2019-12-20,
      required_room: 1,
    }
  const SearchByName = async () => {
    setIsLoading(true) 
    const response = await axios({
      method: 'POST',
      url: `/booking/api_v_1/hotel_search_by_parameters/`,
      headers: {
        'content-type': 'application/json'
    },
    data: searchData
    })
    const data = await response.data;
console.log(data.hotel.data);
setItems(data.hotel.data);
}


const handleChangeSearch = (e, setFieldValue) => {
  setFieldValue("search", e.target.value);
}; 
const handleSubmit = async (value) => {
  await  SearchByName(value);
    if(items.length) {
           push({
      pathname: '/roomslist',
      state: {searchitem: items}
  })}
  };

    return (
        <div>
          <Typography variant="h6"> Find the Best Hotels </Typography>
               <Box display="flex" justifyContent="start">
                   <Box {...defaultProps} borderTop={2} />
             </Box>
          <div className={classes.reservecontent}>

              <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
         onSubmit={handleSubmit}
       >
           {({ values, setFieldValue }) => (
               <>
              <Form className="search-form">
                <div className={classes.reserveitem}>
                    <div className={classes.search}>
                    <label>Search Country/Place</label><br/><br/>
                    <Search 
                    values={values}
                    setFieldValue={setFieldValue}  
                    handleChange={handleChangeSearch} 
                    />
                    </div>
                    <br/>
                    <div  className={classes.daterangepicker} >
                    <DateRange />
                    </div><br/>  
                    <div className={classes.smalldetails}>
                    <OtherComponent />
                    </div><br/>
                    <span >
                      <Button type="submit" className="main_button"><b>Search</b></Button>
                    </span>
               </div>
               </Form>
               </>
                 )}
               </Formik>
               
            </div>
        </div>
       
    )
}

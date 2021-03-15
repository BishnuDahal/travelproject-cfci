import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import Search from '../../Reusable/Search';
import DateRange from '../../Reusable/DateRange';
import { Formik, Form } from "formik";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import ValidationSchema from '../../Utils/FormikData/ValidationSchema';
import initialValues from '../../Utils/FormikData/InitialValues';
import { Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box';

const defaultProps = {
    bgcolor: 'background.paper',
    // m: 1,
    mb:3,
    style: { width: '70px', height: '5px' },
  };
export default function ReserveCardRental({classes}) {
   const [items, setItems] = useState([]);
   const [isLoading, setIsLoading] = useState(false)
   const { push } = useHistory();

const performSearch = async (search = '') => {
  setIsLoading(true) 
  const response  = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&limit=13&api_key=NoNeig49cOUIyMEpTBJ4gYWwztzA7RnH`)
  const data = await response.data.data;
  setItems(data)
  setIsLoading(false) 
}
// useEffect(() => {
//  performSearch();
// }, [])
const handleChangeSearch = (e, setFieldValue) => {
  setFieldValue("search", e.target.value);
}; 
const handleSubmit = async (value) => {
    await performSearch(value.search);
    if(items.length) {
           push({
      pathname: '/itemssearch',
      state: {title: items}
  })}
  };
    return (
        <div className={classes.reservePageCard}>
          <div className={classes.reservecontent}>
              {/* <MainIconList classes={classes} /> */}

              <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
         onSubmit={handleSubmit}
       >
           {({ values, setFieldValue }) => (
               <>
               <Typography variant="h6"> Find the Best Rentals </Typography>
               <Box display="flex" justifyContent="start">
                   <Box {...defaultProps} borderTop={2} />
             </Box>
              <Form className="search-form">
                <div className={classes.reserveitem}>
                    <div className={classes.search}>
                    <label>Search Cars</label><br/><br/>
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


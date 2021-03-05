import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextField } from "formik-material-ui";
import { Field } from "formik";



export default function SearchHotel({handleChange, values, setFieldValue}) {
    return ( 
      <>
      <label>Search Country/Place</label><br/><br/>
        <Field
        fullWidth 
              type="search"
              name="search"
              onChange={(e) => {handleChange(e, setFieldValue)
                }}
              placeholder="Search..."
              size="small"
              value={values.search || ''}
              variant="outlined"
              component={TextField}
              disabled={false}
              autoFocus={true}
              autocomplete={false}
              InputProps={{
              startAdornment: (
              <InputAdornment position="start">
                <SearchIcon className="IconElement" />
              </InputAdornment>
            ),
          }}
            />
      </>
    );
  
}


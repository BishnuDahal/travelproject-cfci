import React, {useState} from 'react'
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import DateRangeIcon from '@material-ui/icons/DateRange';

import moment from "moment";


export default function DateRange() {
    const [dateRange, setDateRange] = useState({
        startDate: moment(),
        endDate: moment().add(2, "days")
      });
      const [focus, setFocus] = useState(null);
    
      const { startDate, endDate } = dateRange;
    
    //   const handleOnDateChange = (startDate, endDate) =>
    //   setDateRange({startDate, endDate})
    return (
        <div>
          <label>Check In/ Check Out</label><br/><br/>
            <DateRangePicker 
            variant="outlined"
            label="Check In /Check Out"
            style={{padding:0, margin:0 }}
        startDatePlaceholderText="CheckIn"
        startDate={startDate}
        onDatesChange={({ startDate, endDate }) => setDateRange({ startDate, endDate })}
        endDatePlaceholderText="CheckOut"
        endDate={endDate}
        displayFormat="YYYY MMM D"
        showClearDates={true}
        focusedInput={focus}
        onFocusChange={focus => setFocus(focus)}
        startDateId="Check In"
        endDateId="Check Out"
         customInputIcon={<DateRangeIcon style={{padding:0, margin:0 }} className="IconElement"/>} 
         numberOfMonths={1}
        // openDirection= "up"
      />
        </div>
    )
}

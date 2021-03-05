import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import DoneIcon from '@material-ui/icons/Done';
import HelpIcon from '@material-ui/icons/Help';

const longText = `
Meals: Breakfast is included in rooms rate.
Launch Cost NPR 423 per person per night.
Dinner Cost NPR 423 per person per night.
Cancellation: Free Cancellation
Payment: No pre Payment is Required
`;
export default function YourChoices({sleep}) {
    return (
        <div>
            {/* {row.sleeps.map(sleep => <div key={sleep.persons}> */}
             <p style={{color: 'green', fontSize: '12px'}}>
                 <span>
                <FreeBreakfastIcon fontSize="small" /> {sleep.breakfast} {''}{''}
                <Tooltip title={longText}><HelpIcon fontSize="small" color="primary" /></Tooltip>
                </span>
                <br/><br/>
                 <DoneIcon fontSize="small"/> {sleep.cancellation}<br/><br/>
                 <DoneIcon fontSize="small"/>{sleep.payment}
                  </p>
                  
            {/* </div> */}
            {/* // )} */}
        </div>
    )
}

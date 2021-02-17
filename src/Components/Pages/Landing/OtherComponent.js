import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import PersonPinIcon from '@material-ui/icons/PersonPin';


export default function OtherComponent() {
    return (
        <div>
            <TextField
    type="number"
    variant="outlined"
    InputProps={{
        inputProps: { 
            max: 10, min: 0 
        },
        defaultValue: 1,
        // endAdornment: (
        //     <InputAdornment position="end">
        //      <PersonPinIcon />
        //     </InputAdornment>
        //   ),
    }}
    label="Adults"
    style={{width: 79, margin: "4px"}}
    size="small"
    
/> {""}
<TextField
    type="number"
    variant="outlined"
    InputProps={{
        inputProps: { 
            max: 10, min: 0 
        },
        defaultValue: 0,
        // endAdornment: (
        //     <InputAdornment position="end">
        //       <ChildCareIcon />
        //     </InputAdornment>
        //   ),
    }}
    label="Childs"
    style={{width: 79, margin: "4px"}}
    size="small"
 
/> {""}
<TextField
    type="number"
    variant="outlined"
    InputProps={{
        inputProps: { 
            max: 10, min: 0 
        },
        defaultValue: 1,
        // endAdornment: (
        //     <InputAdornment position="end">
        //       <RoomServiceIcon />
        //     </InputAdornment>
        //   ),
    }}
    label="Rooms"
    style={{width: 79, margin: "4px"}}
    size="small"
    
/> {""}
{/* <TextField
    type="number"
    variant="outlined"
    InputProps={{
        inputProps: { 
            max: 10, min: 0 
        },
        defaultValue: 0,
        endAdornment: (
            <InputAdornment position="end">
             <AccountCircle />
            </InputAdornment>
          ),
    }}
    label="Infant"
    style={{width: 79, margin: "4px"}}
    size="small"
 
/> */}
        </div>
    )
}

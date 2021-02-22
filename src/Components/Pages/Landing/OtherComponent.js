import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import RoomServiceIcon from '@material-ui/icons/RoomService';
// import ChildCareIcon from '@material-ui/icons/ChildCare';
// import PersonPinIcon from '@material-ui/icons/PersonPin';


export default function OtherComponent() {
    return (
        <div style={{display: "flex", flexWrap:"nowrap"}}>
            <div>
             <left><label>Adults</label></left><br/>
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
    // label="Adults"
    style={{width: 96, margin: "10px 10px 0px 0px"}}
    size="small"
    
/> </div>{""}
<div>
<left><label>Childs</label></left><br/>
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
    // label="Childs"
    style={{width: 96, margin: "10px 10px 0px 0px"}}
    size="small"
 
/></div> {""}
<div>
    <left><label>Rooms</label></left><br/>
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
    // label="Rooms"
    style={{width: 96, margin: "10px 10px 0px 0px"}}
    size="small"
    
/>
</div> {""}
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
    style={{width: 96 margin: "5px"}}
    size="small"
 
/> */}
        </div>
    )
}

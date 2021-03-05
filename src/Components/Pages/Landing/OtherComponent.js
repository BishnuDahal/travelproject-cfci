import React from 'react'
import TextField from '@material-ui/core/TextField';

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
    }}
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
    }}
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
    }}
    style={{width: 96, margin: "10px 10px 0px 0px"}}
    size="small"
    
/>
</div>
        </div>
    )
}

import React from 'react'
import TextField from '@material-ui/core/TextField';

export default function SelectRooms() {
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
    }}
    style={{width: 96, margin: "10px 10px 0px 0px"}}
    size="small"  
/>
        </div>
    )
}

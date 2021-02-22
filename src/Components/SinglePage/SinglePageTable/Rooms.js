
import React from 'react'

export default function Rooms({row}) {
    return (
        <div>
             {row.rooms.room_type}<br/>
                {row.rooms.bed}<br/>
                <p style={{color: 'blue'}}>{row.rooms.facilities} </p> <br/>
                <hr />
                <p style={{color: 'blue'}}>{row.rooms.other_facilities} </p> 
        </div>
    )
}

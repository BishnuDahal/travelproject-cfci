import React from 'react'

export default function Price({sleep}) {
    return (
        <div>
            {/* {row.sleeps.map(sleep => <div key={sleep.persons}> */}
                <h4 style={{color: 'red', textDecoration: 'line-through'}}>NPR {''} {sleep.last_price}</h4>
                  <h4> NPR {sleep.new_price} </h4>  includes taxes and charges
                
            {/* </div>)} */}
             
        </div>
    )
}

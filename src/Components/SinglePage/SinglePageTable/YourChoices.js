import React from 'react'

export default function YourChoices({sleep}) {
    return (
        <div>
            {/* {row.sleeps.map(sleep => <div key={sleep.persons}> */}
             <p style={{color: 'blue', fontSize: '12px'}}>
                  {sleep.breakfast}<br/><br/>
                  {sleep.cancellation}<br/><br/>
                  {sleep.payment}
                  </p>
                  
            {/* </div> */}
            {/* // )} */}
        </div>
    )
}

import React from 'react'
import SinglePageHeading from './SinglePageHeading';
import GridListImageContent from './GridListImageContent';



export default function GridListImage({classes, tile}) {
   
    // console.log(tileData)
  
    return (
        <div>
         
          <div>
            <SinglePageHeading classes={classes} tile={tile}/>
          </div>
        
         <div>
           <GridListImageContent classes={classes} tile={tile} />
            </div>
           
         
      </div>
    )
}

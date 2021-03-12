import React from 'react'
import SinglePageHeading from './SinglePageHeading';
import GridListImageContent from './GridListImageContent';
import SimpleReactLightbox from 'simple-react-lightbox'




export default function GridListImage({classes, tile}) {
   
    // console.log(tileData)
  
    return (
        <div>
         
          <div>
            <SinglePageHeading  tile={tile}/>
          </div>
        
         <div>
         {/* <SimpleReactLightbox>
           <GridListImageContent classes={classes} tile={tile} />
          </SimpleReactLightbox> */}
           
            </div>
           
         
      </div>
    )
}

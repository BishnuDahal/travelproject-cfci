import React, { useState } from 'react'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { SRLWrapper } from "simple-react-lightbox";

export default function GridListImageContent({classes, tile}) {
    console.log(tile,"grid")
    const max = 10;
    const [limit, setLimit] = useState(6);
    const handleShowMoreImages = () => {
        console.log(limit, "limit")
        if (limit <= max) {
          setLimit(limit + 2);
        }
      };
    return (
        <div className={classes.gridroot}>
             <SRLWrapper>
             <GridList cellHeight={160} className={classes.gridList} cols={4}>
            {tile.imgsrc.slice(0, limit).map(images =>
           
            <GridListTile key={images.id} cols={images.rows || 1}>    
                     <a href={images.image}> 
              <img src={images.image} alt={images.id} width="100%" height="100%"  />
               </a>
            </GridListTile>
            )}
               <button style={{color: "red"}} onClick={handleShowMoreImages}>See More</button>
            </GridList>
            </SRLWrapper>

        </div>
    )
}
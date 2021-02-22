import React from 'react'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

export default function GridListImageContent({classes, tile}) {
    console.log(tile,"grid")
    return (
        <div className={classes.gridroot}>
             <GridList cellHeight={160} className={classes.gridList} cols={4}>
            {tile.imgsrc.map(images =>
            <GridListTile key={images.id} cols={images.cols || 1}>
              <img src={images.image} alt={images.id} />
            </GridListTile>
            )}
            </GridList>
        </div>
    )
}
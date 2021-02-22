import React from 'react'
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';
import SinglePageDescriptionContent from './SinglePageDescriptionContent';
import SinglePageDescriptionReserve from './SinglePageDescriptionReserve';


export default function SinglePageDescription({classes, tile}) {
    return (
        <div>
            <Grid container spacing={3}>

            <Grid item lg={7} sm={12} xs={12}>
            <Paper className={classes.paper}>
               <SinglePageDescriptionContent classes={classes} tile={tile} />
           </Paper>
           </Grid>

              <Grid item lg={4} sm={12} xs={12}>
              <Paper className={classes.paper}>
                <SinglePageDescriptionReserve classes={classes} tile={tile} />
                  </Paper>
              </Grid>

              </Grid>
        </div>
    )
}

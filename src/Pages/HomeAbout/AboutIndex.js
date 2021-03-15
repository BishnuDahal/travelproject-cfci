import React from 'react'
import useAboutStyles from './AboutStyle';
import Grid from '@material-ui/core/Grid';
import AboutLeft from '../../Components/About/AboutLeft';

export default function AboutSection() {
    const classes = useAboutStyles();
    return (
        <div>
            <div className={classes.aboutsectionpage}>
            <Grid container spacing={1}>
        <Grid item xs={12}>
         <AboutLeft classes={classes} />
        </Grid>
        </Grid>
        
            </div>
        </div>
    )
}


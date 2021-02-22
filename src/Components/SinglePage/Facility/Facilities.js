import React from 'react'
import FacilityHeading from './FacilityHeading';

export default function Facilities({classes, tile}) {
    return (
        <div className={classes.facilties}>
            <FacilityHeading tile={tile} />
        </div>
    )
}

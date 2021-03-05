
import React from 'react'
import PopularFacilty from '../SinglePageDescription/PopularFacilty';
import FacilityHeading from './FacilityHeading';
import FaciltyItems from './FaciltyItems';

export default function Facilities({classes, tile}) {
    return (
        <div>
        <div className={classes.facilties}>
            <FacilityHeading tile={tile} />
        </div><br/>
        <div>
            <PopularFacilty />
        </div>
        <br/>
        <div>
           
            <FaciltyItems />
        </div>
        </div>
    )
}

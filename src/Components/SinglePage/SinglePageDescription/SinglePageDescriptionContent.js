import React from 'react'
import Typography from '@material-ui/core/Typography';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import PopularFacilty from './PopularFacilty'


export default function SinglePageDescriptionContent({classes, tile}) {
    return (
        <div>
            
             <Typography  variant="body2"  style={{color: "#f6a82f", fontWeight: "800"}}>
             <StarBorderIcon /> {''}{''} One Of our best sellers in {tile.hotel_city}
                  </Typography>
                  <br/>
              <Typography  variant="body2"  style={{fontSize: "12px"}}>{tile.hotel_description}</Typography>
              <br/><br/>
              <div>
              <PopularFacilty tile={tile} />
              <br/>
              <Typography  variant="body2"  style={{color: "blue", fontSize: "12px", fontWeight: "600"}}>
                   Good for Couples- they rate the facilities 8.5 for two-person stays.
                  </Typography>
              </div>
        </div>
    )
}

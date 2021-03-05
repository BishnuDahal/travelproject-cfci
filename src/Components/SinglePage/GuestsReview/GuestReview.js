import React from 'react'
import Typography from '@material-ui/core/Typography';
import GuestReviewCard from './GuestReviewCard'
import { Button } from '@material-ui/core';

export default function GuestReview({tile}) {
    return (
        <div style={{padding: "20px"}}>
            <Typography variant="h5"><b>Guests Reviews</b></Typography><br/>
            <Typography variant="body2"><b>See What Guests Loved the Most:</b></Typography><br/>
            <div>
                <GuestReviewCard tile={tile}/>
            </div>
            <Button color= "primary" variant= "outlined" size="small"> Read All Reviews </Button>
        </div>
    )
}

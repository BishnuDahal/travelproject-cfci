import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-elastic-carousel';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    background: 'transparent',
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    border: '1px solid gray',
  },
  avatar: {
    backgroundColor: red[500],
  },
  guestreview: {
      display: 'flex',
  },
}));
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 360, itemsToShow: 2, itemsToScroll: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 }
     ]

export default function RecipeReviewCard({tile}) {
  const classes = useStyles();
  console.log(tile)
  return (
      <div className={classes.guestreview}>
         <Carousel breakPoints={breakPoints} className={classes.carasoul} >
      {tile.reviews.map(review => <div>
    <Card className={classes.root}>
        
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title={review.name}
        subheader="🇳🇵 Nepal"  
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         {review.description}
        </Typography>
      </CardContent>
    </Card>
    </div>
     )}
    </Carousel>
    </div>
  );
}

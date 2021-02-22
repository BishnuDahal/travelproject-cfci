import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Carousel from 'react-elastic-carousel';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useCardHotelStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin: theme.spacing(1),
        backgroundColor: '#fff',
     },
}))
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 360, itemsToShow: 2, itemsToScroll: 2 },
  { width: 600, itemsToShow: 3 },
  { width: 900, itemsToShow: 4 }
   ]


export default function CardSection({items}) {
  const classes = useCardHotelStyles();
  console.log(items, 'cardsection')
  const [value, setValue] = useState(2);

  return (
      <>
         <Carousel breakPoints={breakPoints} className={classes.carasoul} >
        {items.map(item => ( 
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={item.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.name} {''} 
          </Typography>
          <Box component="fieldset" ml={-3} borderColor="transparent">
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
         <b>{item.star_rating}</b>
      </Box>
          <Typography variant="body2" color="textSecondary" component="p">
          {item.id}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <b>Starting NPR</b> <span style={{color: "blue"}}><b>{item.ratefornepali}</b></span><br/>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button className= "main_button">Book</Button>
      </CardActions>
    </Card>
    ))}
    </Carousel> 
    </>
  );
}

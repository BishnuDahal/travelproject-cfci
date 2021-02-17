import React, {useState} from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Carousel from 'react-elastic-carousel';


const useOffercardunitStyles =  makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: theme.spacing(2),
},
}))
export default function OfferCardUnit() {
    const classes = useOffercardunitStyles();
    const [value, setValue] = useState(2);
    const [items, setitems] = useState(
      [
           {id: 1, title: 'item #1', address: 'Kathmandu Nepal', imgsrc: '/images/hotellistfirst.webp', price: 2000},
           {id: 2, title: 'item #2', address: 'Janakpur Nepal', imgsrc: '/images/hotellistsecond.webp', price: 3000},
           {id: 3, title: 'item #3', address: 'Chitwan Nepal',  imgsrc: '/images/Hotellistthird.webp', price: 4000},
           {id: 4, title: 'item #4', address: 'Lumbini Nepal',  imgsrc: '/images/Hotellistfourth.webp', price: 5000},
           {id: 5, title: 'item #5', address: 'Bharatpur Nepal', imgsrc: '/images/offercardimage.jpg', price: 6000},
        ]
      )
      const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 360, itemsToShow: 2, itemsToScroll: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 }
         ]

    return (
        <div className={classes.hotellist}>
          <Carousel breakPoints={breakPoints} verticalMode className={classes.carasoul} >
           {items.map(item => <div key={item.id} color="secondary">
           <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="120"
          image={item.imgsrc}
          title="Contemplative Reptile"
        />
        </CardActionArea>
        <div>
          <CardContent>
          <Typography  variant="h5" component="h2">
          {item.title}
          </Typography>
          <Box component="fieldset" ml={-3} borderColor="transparent">
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
          <Typography variant="body2" color="textSecondary" component="p">
          <b>Starting NPR</b> <span style={{color: "blue"}}><b>{item.price}</b></span><br/>
          </Typography>
        </CardContent>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        <span className="main_button" ><Button  href="/" >See More </Button></span>
      </CardActions>
      </div>
    </Card>
    </div>
    )}
    </Carousel>
        </div>
    )
}

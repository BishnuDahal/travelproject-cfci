import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import light1 from '../../assets/light1.jpg'

const useRecentCardStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#FFFFF',
      },
}))
export default function RecentCard() {
    const classes = useRecentCardStyles();
    return (
        <div>
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="180"
          image={light1}
          title="Contemplative Reptile"
        />
          <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </div>
    )
}

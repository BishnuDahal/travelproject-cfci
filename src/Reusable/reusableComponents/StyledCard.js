import React from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import GroupButton from "./GroupButton";
import StyledRating from "./StyledRating";

const useCardStyle = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    maxHeight: 500,
    margin: "20px",
  },

  cardMedia: {
    height: 230,
    paddingTop: "56.25%", // 16:9,
    opacity: ".8",
    position: "relative", //hotel name and rating
  },

  cardContent: {
    padding: "5px 4px 4px 3px",
  },

  actionArea: {
    display: "flex",
    justifyContent: "space-between",
  },

  bookBtn: {
    backgroundColor: "#ffb732",
    color: "#fff",
    width: "50%",
    height: '50%',
    "&:hover": {
      backgroundColor: "#f29807",
    },
  },

  hotelName: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    position: "absolute",
    bottom: "-5px",
    padding: ".3rem",
    zIndex: "99",
  },
}));

const StyledCard = (props) => {
  const { id, title, address, price, imgsrc } = props;

  const classes = useCardStyle();
  return (
    <>
      <Card raised={true} className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.cardMedia}
            image={`${imgsrc}`}
            component="div"
            title={title}
          >
            <div className={classes.hotelName}>
              <Typography gutterBottom variant="subtitle2" component="h2">
                {title}
              </Typography>
              <StyledRating />
            </div>
          </CardMedia>

          <GroupButton />

          <CardContent className={classes.cardContent}>
            <Typography variant="h4" color="textSecondary" component="p">
              Price: {price}
            </Typography>
            <Typography variant="h4" color="textSecondary" component="p" noWrap>
              Location: {address}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.actionArea}>
          <Button size="small" color="secondary">
            Learn More
          </Button>
          <Button className={classes.bookBtn}>Book</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default StyledCard;

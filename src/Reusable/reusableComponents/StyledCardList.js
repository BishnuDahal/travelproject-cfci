import React from "react";
import {
  Grid,
  makeStyles,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Button,
  Typography,
  CardActionArea,
  CardHeader,
} from "@material-ui/core";
import AccessibleForwardIcon from "@material-ui/icons/AccessibleForward";
import WifiIcon from "@material-ui/icons/Wifi";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
import TvIcon from "@material-ui/icons/Tv";
import KingBedIcon from "@material-ui/icons/KingBed";
import PoolIcon from "@material-ui/icons/Pool";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import RoomServiceIcon from "@material-ui/icons/RoomService";
import HotTubIcon from "@material-ui/icons/HotTub";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import StyledRatings from "../../Reusable/reusableComponents/StyledRating";
import StyledDivider from "../../Reusable/reusableComponents/StyledDivider";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useCardStyle = makeStyles((theme) => ({
  cardWrapper: {
    position: "relative",
  },

  cardMedia: {
    height: "100%",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      paddingTop: "50.25%", // 16:9
    },
  },

  favoriteIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "4.375rem",
    height: "3.125rem",
    bottom: 50,
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    right: 0,
    zIndex: 9,
    color: "#fff",
    backgroundColor: theme.palette.grey[400],
    opacity: "0.8",
    "&:hover": {
      backgroundColor: "#FF8C00",
    },
  },

  cardContent: {
    padding: ".1rem",
    "&.MuiCardContent-root": {
      paddingBottom: "0px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      marginBottom: "1rem",
    },
  },

  titleTypographyProps: {
    fontSize: 20,
    fontFamily: "Lato",
    color: "#171717",
    letterSpacing: "0.0075em",
    fontWeight: "600",
    verticalAlign: "middle",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  },

  subheaderTypographyProps: {
    marginTop: "1rem",
    fontSize: 15,
    fontWeight: 500,
    fontFamily: "Lato",
    color: "black",
    verticalAlign: "middle",
    alignItems: "center",
    lineHeight: ".2",
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px",
      marginTop: "1.3rem",
      lineHeight: ".5",
    },
  },

  titleTypographyPrice: {
    fontSize: 20,
    fontFamily: "Lato",
    color: "green",
    letterSpacing: ".1rem",
    fontWeight: "600",
    verticalAlign: "middle",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  },

  hotelDetails: {
    fontSize: 13,
    fontWeight: 400,
    fontFamily: "Lato",
    color: "0000008A",
    verticalAlign: "middle",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  },

  cardAction: {
    display: "flex",
    height: "100%",
    padding: "5px",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("lg")]: {
      padding: "0px",
      marginLeft: "-15px",
    },
  },

  rating: {
    [theme.breakpoints.down("lg")]: {
      paddingLeft: "0px",
    },
  },

  price: {
    [theme.breakpoints.down("lg")]: {
      paddingLeft: "0px",
    },
  },

  bookBtn: {
    backgroundColor: "#ffb732",
    "&.MuiButtonBase-root": {
      marginTop: "0px",
    },
    color: "#fff",
    "&:hover": {
      backgroundColor: "#f29807",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px",
      letterSpacing: ".2rem",
    },
  },

  cardActionItem: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      padding: "1rem",
      position: "relative", //actionItem
      height: "5rem",
      marginBottom: "1rem",
      // bottom: 5,
      // right: 0,
    },
  },

  actionItem: {
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      right: 10,
      bottom: -10,
    },
  },

  cardActionBtn: {
    "&.MuiCardActions-root": {
      [theme.breakpoints.down("lg")]: {
        paddingLeft: "0px",
      },
    },
  },

  facilityIcon: {
    padding: ".8rem",
    "& .MuiButtonBase-root": {
      [theme.breakpoints.down("lg")]: {
        padding: ".4rem",
      },
      [theme.breakpoints.down("sm")]: {
        padding: ".6rem",
      },
    },
  },
}));

const StyledCardList = (props) => {
  const classes = useCardStyle();
  const { title, address, price, imgsrc, description } = props;
  return (
    <>
      <Card className={classes.cardWrapper}>
        <CardActionArea>
          <Grid container>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
              <CardMedia
                className={classes.cardMedia}
                image={`${imgsrc}`}
                title={title}
              >
                <div className={classes.favoriteIcon}>
                  <FavoriteBorderIcon fontSize="large" />
                </div>
              </CardMedia>
            </Grid>

            <Grid item xs={12} sm={12} md={7} lg={7} xl={7} xxl={7}>
              <CardContent className={classes.cardContent}>
                <CardHeader
                  className={classes.cardHeader}
                  title={`${title}`}
                  subheader={`${address}`}
                  // titleTypographyProps={{ variant: "subtitle1" }}
                  titleTypographyProps={{
                    className: classes.titleTypographyProps,
                  }}
                  subheaderTypographyProps={{
                    className: classes.subheaderTypographyProps,
                  }}
                />

                <CardContent>
                  <Typography className={classes.hotelDetails} component="p">
                    {description}
                  </Typography>
                </CardContent>
                <div className={classes.facilityIcon}>
                  <IconButton>
                    <AccessibleForwardIcon />
                  </IconButton>

                  <IconButton>
                    <WifiIcon />
                  </IconButton>

                  <IconButton>
                    <FitnessCenterIcon />
                  </IconButton>

                  <IconButton>
                    <LocalDiningIcon />
                  </IconButton>

                  <IconButton>
                    <TvIcon />
                  </IconButton>

                  <IconButton>
                    <KingBedIcon />
                  </IconButton>

                  <IconButton>
                    <PoolIcon />
                  </IconButton>

                  <IconButton>
                    <FreeBreakfastIcon />
                  </IconButton>

                  <IconButton>
                    <RoomServiceIcon />
                  </IconButton>

                  <IconButton>
                    <HotTubIcon />
                  </IconButton>

                  <IconButton>
                    <AcUnitIcon />
                  </IconButton>
                </div>
              </CardContent>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={2}
              lg={2}
              xl={2}
              xxl={2}
              className={classes.cardActionItem}
            >
              <CardActions className={classes.cardAction}>
                <StyledDivider
                  orientation="vertical"
                  flexItem={true}
                  style={{ backgroundColor: "#CDCDCD" }}
                />

                <Grid item className={classes.actionItem}>
                  <CardActions disableSpacing className={classes.rating}>
                    <StyledRatings />
                  </CardActions>
                  <CardContent style={{ padding: ".3rem" }}>
                    <CardHeader
                      className={classes.price}
                      title={`Rs. ${price}`}
                      titleTypographyProps={{
                        className: classes.titleTypographyPrice,
                      }}
                    />
                  </CardContent>
                  <CardActions className={classes.cardActionBtn}>
                    <Button fullWidth className={classes.bookBtn}>
                      Book
                    </Button>
                  </CardActions>
                </Grid>
              </CardActions>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </>
  );
};

export default StyledCardList;

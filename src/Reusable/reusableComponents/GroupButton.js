import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import RemoveRedEyeTwoToneIcon from "@material-ui/icons/RemoveRedEyeTwoTone";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineSharpIcon from "@material-ui/icons/ChatBubbleOutlineSharp";
import { Typography } from "@material-ui/core";

const theme = createMuiTheme({
  overrides: {
    // MuiOutlinedInput: {
    //   root: {
    //     "& $notchedOutline": {
    //       borderColor: "green"
    //     },
    //     "&$focused $notchedOutline": {
    //       borderColor: "orange"
    //     },
    //     color: "purple"
    //   },
    //   notchedOutline: {}
    // },
    MuiButton: {
      // outlined: {
      //   borderColor: "green",
      //   color: "red"
      // },
      outlinedPrimary: {
        color: "black",
        borderColor: "#ffb732",
        "&:hover": {
          borderColor: "#f29807",
        },
      },
    },
    MuiButtonGroup: {
      groupedOutlinedPrimary: {
        borderColor: "#ffb732",
        "&:hover": {
          borderColor: "#f29807",
        },
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },

  eachBtn: {
    width: "101px",
    height: '50px',
    color: "primary",
    display: 'flex',
    justifyContent: 'space-around',
    padding: '3px'
  },
}));

const GroupButton = () => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <ButtonGroup size="large" aria-label="large button group">
          <Button className={classes.eachBtn} color="primary">
            <RemoveRedEyeTwoToneIcon fontSize="small" />
            <Typography>20</Typography>
          </Button>
          <Button className={classes.eachBtn} color="primary">
            <FavoriteBorderIcon color="secondary" fontSize="small" />
            <Typography>300</Typography>
          </Button>
          <Button className={classes.eachBtn} color="primary">
            <ChatBubbleOutlineSharpIcon fontSize="small" />
            <Typography>200</Typography>
          </Button>
        </ButtonGroup>
      </div>
    </MuiThemeProvider>
  );
};

export default GroupButton;

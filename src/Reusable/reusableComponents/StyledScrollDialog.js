import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
  Slide,
} from "@material-ui/core";
import { StyledButton } from "../reusableComponents";

const useScrollDialog = makeStyles((theme) => ({
  dialogWrapper: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    height: "80%",
    width: "100%",
    borderRadius: "1rem",
  },

  titleText: {
    "&.MuiDialogTitle-root": {
      padding: ".1rem",
    },
  },

  content: {
    "&.MuiDialogContent-root": {
      padding: "0px",
    },
  },

  actionButton: {
    "&.MuiDialogActions-root": {
      padding: "0px",
    },
  },
}));

//for transition view for dialog box
const scrollTransition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledScrollDialog = (props) => {
  const classes = useScrollDialog();
  const { title, children, openPopup, setOpenPopup } = props;
  const [scroll, setScroll] = useState("paper");
  return (
    <>
      <Dialog
        classes={{ paper: classes.dialogWrapper }}
        open={openPopup}
        scroll={scroll}
        maxWidth="sm"
        TransitionComponent={scrollTransition}
        onClose={() => setOpenPopup(false)}
      >
        <DialogTitle className={classes.titleText}>
          <DialogContentText variant="overline">{title}</DialogContentText>
        </DialogTitle>
        <DialogContent
          dividers={scroll === "paper"}
          className={classes.content}
        >
          {/* ResponsiveFilterSection is rendered here as children */}
          {children}
        </DialogContent>
        <DialogActions className={classes.actionButton}>
          <Button onClick={() => setOpenPopup(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={() => console.log("abc")} color="primary">
            Ok
          </Button>
          {/* <StyledButton onClick={() => setOpenPopup(false)} text="Cancel" />
          <StyledButton type="submit" text="OK" /> */}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default StyledScrollDialog;

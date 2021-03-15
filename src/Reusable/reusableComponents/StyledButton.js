import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    marginTop: '0',
    backgroundColor: "#de9f2a",
    transition: ".2s ease-in all",
    letterSpacing: ".1rem",
    "&:hover": {
      backgroundColor: "#f29807",
    },
  },
});

const StyledButton = (props) => {
  const { text, size, color, variant, onClick, ...rest } = props;
  const classes = useStyle();
  return (
    <Button
      fullWidth
      className={classes.root}
      size={size || "large"}
      color={color || "primary"}
      variant={variant || "contained"}
      onClick={onClick}
      {...rest}
    >
      {text}
    </Button>
  );
};

export default StyledButton;

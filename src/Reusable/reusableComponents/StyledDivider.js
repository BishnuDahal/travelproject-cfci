import React from 'react';
import { Divider, makeStyles} from "@material-ui/core";

const useDivider = makeStyles(theme =>({
  root: {
    backgroundColor: "#f29807",
    // width: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }
}));

const StyledDivider = (props) => {
  const classes = useDivider();

  const { orientation, flexItem, ...rest} = props;
  return (
    <>
    <Divider
      className={classes.root} 
      orientation={orientation}
      flexItem={flexItem}
      variant="fullWidth"
      light={true}
      {...rest}
    />
    </>
  )
}

export default StyledDivider;

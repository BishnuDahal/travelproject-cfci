import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useSlider = makeStyles((theme) => ({
  sliderWrapper: {
    width: 300 + theme.spacing(3) * 2,
    marginLeft: "70px",
  },
}));

const AirbnbSlider = withStyles({
  root: {
    color: "#3a8589",
    height: 3,
    padding: "13px 0",
  },
  thumb: {
    height: 35,
    width: 35,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    marginTop: -12,
    marginLeft: -13,
    boxShadow: "#ebebeb 0 2px 2px",
    "&:focus, &:hover, &$active": {
      boxShadow: "#ccc 0 2px 3px 1px",
    },
    "& .bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  track: {
    height: 10,
  },
  rail: {
    color: "#d8d8d8",
    opacity: 1,
    height: 10,
  },
})(Slider);

function AirbnbThumbComponent(props) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}

const StyledSlider = (props) => {
  const { name, min, max, defaultValue, values, setFieldValue, handleSliderChange } = props;
 
  // console.log('defaultValue',defaultValue)
  
  const classes = useSlider();

  return (
    <div className={classes.sliderWrapper}>
      <AirbnbSlider
        ThumbComponent={AirbnbThumbComponent}
        min={min}
        max={max}
        name={name}
        defaultValue={defaultValue}
        onChange = {(event, newValue) => handleSliderChange(event, name, values, newValue, setFieldValue)}
        valueLabelDisplay="auto"
        // onChange={(event, newValue) => setFieldValue(name, newValue)} //for local test
      />
      
    </div>
  );
};

export default StyledSlider;

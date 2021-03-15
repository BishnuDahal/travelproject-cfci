import React from "react";
import {
  makeStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from "prop-types";

const useAccordion = makeStyles((theme) => ({
  accordionWrapper: {
    width: "100%",
    "&.MuiPaper-root": {
      boxShadow: "none",
      borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    },
  },

  heading: {
    marginLeft: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },

  iconStyle: {
    // modify the size of icon
    "& > svg": {
      minWidth: 40,
      minHeight: 40,
      color: "rgba(0, 0, 0, 0.54)",
    },
  },

}));
const StyledAccordion = (props) => {
  const {
    label,
    rsLabel,
    minPrice,
    maxPrice,
    minRating,
    maxRating,
    minDistance,
    km,
    iconSrc,
    maxDistance,
    dash,
    minSelect,
    selected,
    children,
  } = props;
  const classes = useAccordion();

  return (
    <>
      <Accordion square className={classes.accordionWrapper} >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.iconStyle}>{iconSrc}</div>
          <div className={classes.heading}>
            <Typography variant="h4" color="textPrimary" label={label}>
              {label}
            </Typography>
            <Typography variant="h2">
              <span style={{ marginRight: "3px", letterSpacing: ".1rem" }}>
                {rsLabel}
                {minPrice}
                {minRating}
                {minDistance}
                {minSelect}
              </span>
              {dash}
              <span style={{ marginLeft: "3px", letterSpacing: ".1rem" }}>
                {rsLabel}
                {maxPrice}
                {maxRating}
                {maxDistance}
                {km}
                {selected}
              </span>
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: "rgb(245,245,245)" }}>
         
        {/* StyledSlider is rendered as children */}
          {children}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

StyledAccordion.propTypes = {
  iconSrc: PropTypes.element,
};

export default StyledAccordion;

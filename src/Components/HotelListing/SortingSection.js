import React from "react";
import { Formik, Form } from "formik";
import { Typography, makeStyles, IconButton } from "@material-ui/core";
import StyledTextField from "../../Reusable/reusableComponents/StyledTextField";
import ListAltIcon from "@material-ui/icons/ListAlt";
import GridOnIcon from '@material-ui/icons/GridOn';

const useSorting = makeStyles((theme) => ({
  
  sortFormWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    padding: theme.spacing(2),
  },

  sortIcon:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',


  },
}));

const SortingSection = ({ handleSubmit }) => {
  const classes = useSorting();

  return (
    <>
      <Formik
        initialValues={{
          guestRating: "",
          hotelName: "",
          price: "",
          mostPopular: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={classes.sortFormWrapper}>
          <div>
            <Typography variant="h6" noWrap >Sort By:</Typography>
          </div>
          <div>
            <StyledTextField
              label="Guest Rating"
              name="guestRating"
              type="number"
              variant="standard"
            />
          </div>
          <div>
            <StyledTextField
              label="Hotel Name"
              name="hotelName"
              type="text"
              variant="standard"
            />
          </div>
          <div>
            <StyledTextField
              label="Price"
              name="price"
              type="number"
              variant="standard"
            />
          </div>
          <div>
            <StyledTextField
              label="Most Popular"
              name="mostPopular"
              type="number"
              variant="standard"
            />
          </div>
          <div className={classes.sortIcon}>
            <div>
              <IconButton>
                <ListAltIcon fontSize="large" />
              </IconButton>
            </div>
            <div>
              <IconButton>
                <GridOnIcon fontSize="large" style={{width:'31px', height:'31px'}}/>
              </IconButton>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default SortingSection;

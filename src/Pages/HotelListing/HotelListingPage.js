import React, { useState} from "react";
import { Grid, Hidden, Typography } from "@material-ui/core";
import StyledBreadcrumb from "../../Reusable/reusableComponents/StyledBreadcrumb";
import useHotelListingPage from "./HotelListingPageStyle";
import HotelSearchForm from "../../Components/HotelListing/HotelSearchForm";
import SortingSection from "../../Components/HotelListing/SortingSection";
import StyledDivider from "../../Reusable/reusableComponents/StyledDivider";
import HotelListContent from "../../Components/HotelListing/HotelListContent";
import { FaFilter } from "react-icons/fa";
import ResponsiveSearch from "../../Components/HotelListing/ResponsiveSearch";
import ResponsiveFilterSection from "../../Components/HotelListing/ResponsiveFilterSection";
import { StyledScrollDialog } from "../../Reusable/reusableComponents";
import usePost from "../../customHooks/usePost";


const HotelListingPage = () => {
  const classes = useHotelListingPage();
  const [openPopup, setOpenPopup] = useState(false);

  //Custom hooks call for hotel list
   const {isLoading, hotelData, error} = usePost("/booking/api/first_hotel_list/");

  if (hotelData)
    console.log("hotelData", hotelData)


  const handleSubmit = (values) => {
    console.log("form value", values);
  };

  const handleChangeRespSearch = (e, setFieldValue) => {
    console.log("Location", e.target.value);
    const { value } = e.target;
    setFieldValue("location", value);
    // setFieldValue(values.location.push(value)) in case of initialValue is in array
  };


  const handleSliderChange = (event, name, values, newValue, setFieldValue) => {
    // event.stopPropagation()
    setFieldValue(name, newValue)
    // console.log("Price", values.price);
    // console.log("Rating", values.rating);
    // console.log("Distance", values.distance);
  };

  const handleCheckbox = (event, label, item) => {
    if(item.label === event.target.value) {
      item.isChecked = event.target.checked
    }
  }

  return (
    <>
      <Grid container spacing={3} className={classes.hotelListingWrapper}>
        {/* Breadcrumb */}
        <Grid
          item
          xs={10}
          sm={10}
          md={10}
          lg={10}
          xl={10}
          xxl={10}
          className={classes.breadCrumbContainer}
        >
          <StyledBreadcrumb />
        </Grid>

        <Hidden mdUp>
          <Grid
            item
            xs={10}
            sm={12}
            md={10}
            lg={10}
            xl={10}
            xxl={10}
            style={{
              position: "sticky",
              top: "0",
              backgroundColor: "#EEEEEE",
              zIndex: "10",
              borderRadius: '1rem'
            }}
          >
            <ResponsiveSearch handleSubmit={handleSubmit} handleChange={handleChangeRespSearch} />
          </Grid>
        </Hidden>

        {/* main content */}
        {/* filter */}
        <Hidden smDown mdDown>
          <Grid
            item
            xs={3}
            sm={3}
            md={3}
            lg={3}
            xl={3}
            xxl={3}
            className={classes.filterSectionWrapper}
          >
            <HotelSearchForm handleSubmit={handleSubmit} handleChange={handleChangeRespSearch} classes={classes} />
          </Grid>
        </Hidden>

        {/* hotel list container */}
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={7}
          xl={7}
          xxl={7}
          className={classes.hotelListingContainer}
        >
          <div className={classes.searchResult}>
            <Typography>{`Place Name: ${hotelData.length} result found`}</Typography>
          </div>
          {/* sorting section */}
          <SortingSection />
          <StyledDivider
            orientation="horizontal"
            style={{ backgroundColor: "#CDCDCD", margin: "1rem 1rem" }}
          />
          {/* Hotellist */}
          <HotelListContent isLoading = {isLoading} hotelData={hotelData} error={error}/>
          <Hidden lgUp>
            <div
              className={classes.filterIcon}
              onClick={() => setOpenPopup(true)}
            >
              <FaFilter size={30} />
            </div>
            <StyledScrollDialog
              title="Filter Section"
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
            >
              {/* render as children in Dialogbox */}
              <ResponsiveFilterSection handleSliderChange={handleSliderChange} handleCheckbox={handleCheckbox}/>
            </StyledScrollDialog>
          </Hidden>
          pagination
        </Grid>
      </Grid>
    </>
  );
};

export default HotelListingPage;

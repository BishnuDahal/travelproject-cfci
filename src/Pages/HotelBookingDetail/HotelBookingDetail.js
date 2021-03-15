import React from 'react';
import useglobalTheme from '../../globalTheme';
import Grid from '@material-ui/core/Grid';
import useHotelBookingDetail from './HotelBookingDetailStyle';
import {StyledBreadcrumb} from "../../Reusable/reusableComponents";
import RoomPaymentDetail from '../../Components/HotelBookingDetails/RoomPaymentDetail';
import UserDetails from '../../Components/HotelBookingDetails/UserDetails';

const HotelBookingDetail = () => {
  const classes = useHotelBookingDetail()

  const handleSubmit = (values) => {
    console.log("form value", values);
  };

  const handleCheckbox = (event, label, item) => {
    if(item.label === event.target.value) {
      item.isChecked = event.target.checked
    }
  }

  return (
    <>
      <Grid container spacing={3} className={classes.hotelbookingdetailWrapper}>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10} xxl={10} className={classes.breadCrumbContainer}>
          <StyledBreadcrumb/>
        </Grid>

        <Grid item xs={7} sm={7} md={7} lg={7} xl={7} xxl={7} className={classes.hotelUserDetailContainer}>
          <UserDetails
            handleSubmit={handleSubmit}
            handleCheckbox={handleCheckbox}
            />
        </Grid>

        <Grid item xs={3} sm={3} md={3} lg={3} xl={3} xxl={3} className={classes.bookingDetailContainer}>
          <RoomPaymentDetail />
        </Grid>


      </Grid>
    </>
  );
};

export default HotelBookingDetail;

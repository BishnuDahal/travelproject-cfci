import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nabbar from "../Pages/Nabbar/Nabbar";
import TravelLanding from "../Pages/HomeLanding/TravelLanding";
import Footer from "../Pages/Footer/Footer";
  import AboutIndex from "../Pages/HomeAbout/AboutIndex";
import SinglePage from "../Pages/SinglePage/SinglePage";
import SingleApiData from "../Components/SinglePage/SingleApiData";
// import GuestReview from "../Components/SinglePage/GuestsReview/GuestReview";
//  import ItemsSearch from "../Components/Landing/ItemsSearch";
import RoomsList from "../Pages/RoomsList/RoomsList";
import Error from "../Pages/Error/Error";
import HotelListingPage from "../Pages/HotelListing/HotelListingPage"
import HotelBookingDetail from "../Pages/HotelBookingDetail/HotelBookingDetail";


function PageRouter() {
  return (
    <Router>
      <div className="App">
        <Nabbar />
        <Switch>
        {/* <Route excat path="/home" component={HomePage} /> */}
        <Route path="/hotellist" component={HotelListingPage} />
         <Route path="/hotelbookingdetail" component={HotelBookingDetail} />
        {/* <Route path="/busrental" component={BusRental} /> */} 
        {/* <Route exact path="/roomslist">
            <RoomsList />
          </Route> */}
        <Route exact path="/roomslist" render={(props) => <RoomsList {...props} />} /> 
        <Route exact path="/roomslist/:hotel_id">
           <SingleApiData />
           <Footer />
          </Route>
          <Route exact path="/singlepage">
            <SinglePage />
          </Route>
          
          <Route exact path="/footer">
            <Footer />
          </Route>
        
          <Route exact path="/">
            <TravelLanding />
             <AboutIndex /> 
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default PageRouter;

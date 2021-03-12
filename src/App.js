import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nabbar from "./Components/Nabbar";
import TravelLanding from "./Components/Pages/Landing/TravelLanding";
// import HotelList from "./Components/Pages/Hotel/HotelList";
import SignUp from "./Components/Login/SignUp";
import HotelSection from "./Components/Pages/Hotel/HotelSection";
// import AttractionSection from "./Components/Pages/Attraction/AttractionSection";
// import Light from "./Components/Pages/Light/Light";
// import RecentPlace from "./Components/Pages/Recent/RecentPlace";
import Footer from "./Components/Footer/Footer";
  import AboutIndex from "./Components/Pages/About/AboutIndex";
import SinglePage from "./Components/SinglePage/SinglePage";
import SingleApiData from "./Components/SinglePage/SingleApiData";
// import GuestReview from "./Components/SinglePage/GuestsReview/GuestReview";
import ItemsSearch from "./Components/Pages/Landing/ItemsSearch";
import Buttonpannel from "./Components/Pages/Landing/Buttonpannel";
import Apiaxios from "./Components/Pages/Apiaxios";
import RoomsList from "./Components/Pages/RoomsList/RoomsList";
import Error from "./Components/Pages/Error";

function App() {
  return (
    <Router>
      <div className="App">
        <Nabbar />
        <Switch>
        <Route exact path="/roomslist">
            <RoomsList />
          </Route>
        <Route exact path="/axiosapi">
             <Apiaxios />
          </Route>
        <Route exact path="/buttonpannel">
            <Buttonpannel />
          </Route>
        <Route exact path="/itemssearch" render={(props) => <ItemsSearch {...props} />} />
        <Route exact path="/roomslist/:hotel_id">
           <SingleApiData />
           <Footer />
          </Route>
          <Route exact path="/singlepage">
            <SinglePage />
          </Route>
          <Route exact path="/hotelsection">
            <HotelSection />
          </Route>
          <Route exact path="/footer">
            <Footer />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/">
            <TravelLanding />
             <AboutIndex /> 
             {/*<HotelSection />
            <AttractionSection />
            <HotelList />
            <RecentPlace />
            <Light />  */}
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

export default App;

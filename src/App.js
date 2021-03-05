import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Header from "./Components/Header";
import Nabbar from "./Components/Nabbar";
import Login from "./Components/Login";
import TravelLanding from "./Components/Pages/Landing/TravelLanding";
import LoginForm from "./Components/LogInForm";
// import HotelList from "./Components/Pages/Hotel/HotelList";
import SignUp from "./Components/Login/SignUp";
import HotelSection from "./Components/Pages/Hotel/HotelSection";
// import AttractionSection from "./Components/Pages/Attraction/AttractionSection";
// import Light from "./Components/Pages/Light/Light";
// import RecentPlace from "./Components/Pages/Recent/RecentPlace";
import Footer from "./Components/Footer/Footer";
//  import AboutIndex from "./Components/Pages/About/AboutIndex";
import Check from "./Components/Check";
import SinglePage from "./Components/SinglePage/SinglePage";
import SingleApiData from "./Components/SinglePage/SingleApiData";
// import GuestReview from "./Components/SinglePage/GuestsReview/GuestReview";
import ItemsSearch from "./Components/Pages/Landing/ItemsSearch";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Nabbar />
        <Switch>
        <Route exact path="/itemssearch" render={(props) => <ItemsSearch {...props} />} />
        <Route exact path="/singleapidata">
           <SingleApiData />
           <Footer />
          </Route>
          <Route exact path="/singlepage">
            <SinglePage />
          </Route>
          <Route exact path="/hotelsection">
            <HotelSection />
          </Route>
          <Route exact path="/check">
            <Check />
          </Route>
          <Route exact path="/footer">
            <Footer />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/loginform">
            <LoginForm />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/">
            <TravelLanding />
            {/* <AboutIndex /> */}
             {/*<HotelSection />
            <AttractionSection />
            <HotelList />
            <RecentPlace />
            <Light />  */}
          </Route>
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

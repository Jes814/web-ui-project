import React from "react";
import Banner from "../components/Banner";
import Body from "../components/Body";
import Footer from "../components/Footer";

import InsightData from "../components/InsightData";

import Navbar from "../components/Navbar";
import UpcomingEvents from "../components/UpcomingEvents";

function Homepage() {
  return (
    <div>
      <div>
        <Navbar />
        <Body />
        <InsightData />
        <Banner />
        <UpcomingEvents />
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;

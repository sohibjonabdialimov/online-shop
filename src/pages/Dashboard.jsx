import React from "react";
import Cards from "../components/Cards";
import Gallery from "../components/Gallery";
import Carousel from "../components/Carousel";
import Location from "../components/Location";
import AutoSlider from "../components/AutoSlider";

const Dashboard = () => {
  return (
    <>
      <Carousel />
      <div className="container">
        <Cards />
        <Gallery />
        <AutoSlider />
        <Location />
      </div>
    </>
  );
};

export default Dashboard;

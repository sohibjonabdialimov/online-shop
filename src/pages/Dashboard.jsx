import React from "react";
import Cards from "../components/Cards";
import Gallery from "../components/Gallery";
import Carousel from "../components/Carousel";
import Location from "../components/Location";

const Dashboard = () => {
  return (
    <>
      <Carousel />
      <Cards />
      <Gallery />
      <Location />
    </>
  );
};

export default Dashboard;

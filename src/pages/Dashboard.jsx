import React from "react";
import Cards from "../components/Cards";
import Gallery from "../components/Gallery";
import Carousel from "../components/Carousel";

const Dashboard = () => {
  return (
    <>
      <Carousel />
      <Cards />
      <Gallery />
    </>
  );
};

export default Dashboard;

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

const UsersLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default UsersLayout;

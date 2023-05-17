import React from "react";
import Navbar from "../../Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="md:min-h-[calc(100vh-73px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;

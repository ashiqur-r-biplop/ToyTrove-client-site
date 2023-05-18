import React, { useEffect, useState } from "react";
import Navbar from "../../Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer";
import Spinner from "../Spinner/Spinner";

const Main = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <>
      {loading && <Spinner></Spinner>}
      <>
        {!loading && (
          <div>
            <Navbar></Navbar>
            <div className="md:min-h-[calc(100vh-73px)]">
              <Outlet></Outlet>
            </div>
            <Footer></Footer>
          </div>
        )}
      </>
    </>
  );
};

export default Main;

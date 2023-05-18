import React, { useEffect } from "react";
import popularImage1 from "../../../assets/Image/Popular/popular-taddy-1.jpg";
import popularImage2 from "../../../assets/Image/Popular/popular-taddy-2.jpg";
import popularImage3 from "../../../assets/Image/Popular/popular-taddy-3.jpg";

import Aos from "aos";
import "aos/dist/aos.css";
const Popular = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-semibold my-5 mt-20 mb-12">
        <span className="text-[#32c770] border-[#32c770]"> Our Popular </span>in
        Store
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
        <div className="text-center m-3" data-aos="zoom-in">
          <div className="lg:w-56 bg-slate-200 p-5 mx-auto rounded-lg">
            <img className="w-full " src={popularImage1} alt="" />
          </div>
          <h1 className="font-semibold md:text-2xl">Benny</h1>
          <p className="text-gray-400">price: $120</p>
        </div>
        <div className="text-center m-3" data-aos="zoom-out">
          <div className="lg:w-56 bg-slate-200 p-5 mx-auto rounded-lg">
            <img className="w-full " src={popularImage2} alt="" />
          </div>
          <h1 className="font-semibold md:text-2xl ">Milo</h1>
          <p className="text-gray-400">price: $220</p>
        </div>
        <div className="text-center m-3" data-aos="zoom-in">
          <div className="lg:w-56 bg-slate-200 p-5 mx-auto rounded-lg">
            <img className="w-full " src={popularImage3} alt="" />
          </div>
          <h1 className="font-semibold md:text-2xl ">Finn</h1>
          <p className="text-gray-400">price: $80</p>
        </div>
      </div>
    </div>
  );
};

export default Popular;

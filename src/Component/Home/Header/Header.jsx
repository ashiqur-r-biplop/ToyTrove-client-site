import React, { useEffect } from "react";
import headerImg from "../../../assets/Image/header.jpg";
import { FaShoppingCart } from "react-icons/fa";
import Aos from "aos";
import 'aos/dist/aos.css'
const Header = () => {

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div 
      style={{
        backgroundImage: `url(${headerImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="container mx-auto flex flex-col justify-center h-full space-y-5 " >
        <h1 className="text-white lg:w-2/4 ">
          <span className="text-[#32c770] font-semibold md:text-4xl">Bringing Joy to Every  Child</span> <br />
          <span className="md:text-8xl text-3xl font-bold mt-10 ">
            Explore Our Toy Wonderland
          </span>
        </h1>
        <p className="md:w-2/4 text-white  leading-9  md:text-xl">
          Welcome to our enchanting world of play and imagination!{" "}
          <span className="text-[#32c770] font-bold ">At ToyTrove</span>
          , we believe that childhood is a precious time filled with wonder and
          discovery. Our carefully curated collection of extraordinary toys is
          designed to spark joy, ignite imagination, and create unforgettable
          memories.
        </p>
        <div>
          <button className=" bg-[#32c770] text-[#000000] px-4 py-3 md:px-10 md:py-4 rounded-full font-semibold flex items-center uppercase">
            <FaShoppingCart></FaShoppingCart>
            <span className="ms-2">Buy Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

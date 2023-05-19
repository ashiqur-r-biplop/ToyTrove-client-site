import React from "react";
import { useLoaderData } from "react-router-dom";
import Category from "../Home/Category/Category";

const Details = () => {
  const SingleToy = useLoaderData();
  console.log(SingleToy);
  return (
    <div className="container mx-auto md:mt-28 mt-5">
      <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-semibold my-5 md:my-10">
        Category: <span className="text-[#32c770]">{SingleToy?.category}</span>
      </h1>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row lg:justify-center lg:items-start">
          <div className="lg:w-1/2 w-full">
            <img
              src={SingleToy?.photoUrl}
              alt={`"${SingleToy?.toyName}"`}
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

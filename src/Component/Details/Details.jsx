import React from "react";
import { useLoaderData } from "react-router-dom";
import Category from "../Home/Category/Category";

const Details = () => {
  const SingleToy = useLoaderData();
  console.log(SingleToy);
  return (
    <div className="container mx-auto md:mt-28 mt-5">
      <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-semibold my-5 md:my-10 ">
        Category: <span className="text-[#32c770]">{SingleToy?.category}</span>
      </h1>
      <div className="hero lg:h-[70vh]">
        <div className="hero-content flex-col lg:flex-row lg:justify-center lg:items-start">
          <div className="lg:w-1/2 w-full">
            <img
              src={SingleToy?.photoUrl}
              alt={`"${SingleToy?.toyName}"`}
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2 w-full mt-4 lg:mt-0 space-y-3">
            <h2 className="md:text-3xl text-2xl">
              <span className="font-semibold">Seller Name : </span>
              {SingleToy?.sellerName}.
            </h2>
            <h2 className="md:text-3xl text-xl">
              <span className="font-semibold">Seller Email : </span>
              {SingleToy?.sellerEmail}.
            </h2>
            <p className="md:text-3xl text-xl">
              <span className="font-semibold"> Toy Name: </span>
              {SingleToy?.toyName}
            </p>
            <p className="md:text-3xl text-xl">
              <span className="font-semibold">Price: $</span>
              {SingleToy?.price}
            </p>
            <p className="md:text-3xl text-xl">
              <span className="font-semibold">available quantity:</span>
              {SingleToy?.quantity}
            </p>
            <p className="md:text-3xl text-xl">
              <span className="font-semibold">Rating: </span>
              {SingleToy?.rating}
            </p>
            <p className="text-xl">{SingleToy?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

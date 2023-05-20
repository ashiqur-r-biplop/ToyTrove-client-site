import React from "react";
import { useLoaderData } from "react-router-dom";
import Category from "../Home/Category/Category";
import Rating from "react-rating";
import { FaStar, FaStarHalf, FaStarHalfAlt } from "react-icons/fa";
import useTitle from "../CustomeHook/Hook";

const Details = () => {
  
  const SingleToy = useLoaderData();
  console.log(SingleToy);
  useTitle(`${SingleToy.toyName} Details`)
  return (
    <div className="container mx-auto md:mt-28 mt-5">
      <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-semibold my-5 md:my-10 ">
        Category: <span className="text-[#32c770]">{SingleToy?.category}</span>
      </h1>
      <div className="hero lg:h-[70vh]">
        <div className="hero-content flex-col lg:flex-row lg:justify-center lg:items-center">
          <div className="lg:w-1/2 w-full">
            <img
              src={SingleToy?.photoUrl}
              alt={`"${SingleToy?.toyName}"`}
              className="w-[100%] rounded-lg shadow-2xl lg:h-[500px]"
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
              <span className="font-semibold"> Toy Name : </span>
              {SingleToy?.toyName}
            </p>
            <p className="md:text-3xl text-xl">
              <span className="font-semibold">Price : $</span>
              {SingleToy?.price}
            </p>
            <p className="md:text-3xl text-xl">
              <span className="font-semibold">available quantity :</span>
              {SingleToy?.quantity}
            </p>
            <p className="md:text-3xl text-xl flex items-center">
              <span className="font-semibold">Rating :</span>
              <Rating
                className="mt-3"
                placeholderRating={SingleToy?.rating}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                readonly
              />
            </p>
            <p className="text-xl">
              <span className="font-semibold md:text-3xl text-xl">
                Description :
              </span>{" "}
              {SingleToy?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

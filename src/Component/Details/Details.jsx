import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import useTitle from "../CustomeHook/Hook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "@smastrom/react-rating/style.css";
import { Rating, Star } from "@smastrom/react-rating";
const myStyles = {
  itemShapes: Star,
  activeFillColor: "#32c770",
  inactiveFillColor: "#d8d8d8",
};

const Details = () => {
  const SingleToy = useLoaderData();
  const navigate = useNavigate();
  // console.log(SingleToy);
  useTitle(`${SingleToy.toyName} Details`);
  return (
    <div className="container mx-auto md:mt-28 mt-5">
      <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-semibold my-5 md:my-10 ">
        Category: <span className="text-[#32c770]">{SingleToy?.category}</span>
      </h1>
      <div className="text-center">
        <button
          onClick={() => navigate(-1)}
          className="bg-[#32c770] px-4 py-2 rounded-full text-white"
        >
          <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
          <span className="ms-2">Back Now</span>
        </button>
      </div>
      <div className="hero lg:h-[70vh]">
        <div className="hero-content flex-col lg:flex-row lg:justify-center lg:items-center">
          <div className="lg:w-1/2 w-full">
            <img
              src={SingleToy?.photoUrl}
              alt={`"${SingleToy?.toyName}"`}
              className="w-[100%] rounded-lg shadow-2xl lg:h-[500px]"
            />
          </div>
          <div className="lg:w-1/2 w-full lg:ms-28 mt-4 lg:mt-0 space-y-3">
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
              <span className="font-semibold">Available quantity :</span>
              {SingleToy?.quantity}
            </p>
            <p className="md:text-3xl text-xl flex items-center">
              <span className="font-semibold">Rating :</span>

              <Rating
                style={{ maxWidth: 100 }}
                className="ms-2"
                value={SingleToy?.rating}
                itemStyles={myStyles}
                readOnly
              />
            </p>
            <p className="text-xl md:text-3xl">
              <span className="font-semibold ">Description :</span>{" "}
              <span>{SingleToy?.description}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

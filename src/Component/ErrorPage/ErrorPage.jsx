import React from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";
import "./ErrorPage.css";
import errorImage from "../../assets/Image/error/error-image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ErrorPage = () => {
  const { error } = useRouteError();
  const navigate = useNavigate();
  return (
    <section className="container mx-auto">
      <div className="err-container">
        <div className="text-center flex flex-col justify-center items-center h-full w-full">
          <div className="w-1/2 mx-auto">
            <img className="w-full" src={errorImage} alt="" />
          </div>
          <div className="">
            <p className="text-2xl font-semibold md:text-3xl text-[#32c770] mb-8">
              {error?.message}
            </p>
            <button
              onClick={() => navigate(-1)}
              className="bg-[#32c770] px-4 py-2 rounded-full text-white"
            >
              <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
              <span className="ms-2">Back Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;

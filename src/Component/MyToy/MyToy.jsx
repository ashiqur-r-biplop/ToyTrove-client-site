import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvide/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCross,
  faMultiply,
} from "@fortawesome/free-solid-svg-icons";

const MyToy = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myToy?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  // console.log(toys);
  return (
    <div>
      <>
        {toys.length === 0 && (
          <div className="md:mt-28 mt-5 container mx-auto">
            <div className="h-[80vh] flex justify-start items-center">
              <h1
                className="text-center w-full lg:text-3xl md:w-1/2 mx-auto"
                style={{ lineHeight: "50px" }}
              >
                {" "}
                You haven't added any toys yet.{" "}
                <span className="text-[#32c770]">
                  If you want to see your own toys, add a toy by going to the
                  Add a Toy page
                </span>
              </h1>
            </div>
          </div>
        )}
        {toys.length > 0 && (
          <div className="md:mt-28 mt-5 container mx-auto">
            <div className="text-center my-5">
              <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-semibold my-5 md:mt-20 mb-12">
                My <span className="text-[#32c770]">Toys</span>
                <div
                  className={
                    "mt-6 grid grid-cols-1 justify-center my-auto lg:grid-cols-2 mx-auto"
                  }
                >
                  {toys?.map((toy) => (
                    <div key={toy?._id} className="relative m-2">
                      <div className="card p-4 md:p-0 md:flex md:flex-row bg-base-100 shadow-xl">
                        <div className="md:w-1/2 w-full">
                          <img
                            src={toy?.photoUrl}
                            className="w-full h-full"
                            alt="Album"
                          />
                        </div>
                        <div className="lg:w-1/2 w-full p-2 md:flex md:flex-col md:justify-center md:items-stat space-y-2">
                          <h2 className="card-title">Name : {toy?.toyName}</h2>
                          <p className="text-xl text-start">
                            price: ${toy?.price}
                          </p>
                          <p className="text-xl text-start">
                            quantity: {toy?.quantity}
                          </p>
                          <p className="text-xl text-start">
                            category: {toy?.category}
                          </p>
                          <p className="text-xl text-start">
                            rating: {toy?.rating}
                          </p>
                          <p className="text-sm text-start">
                            Description : {toy?.description}
                          </p>
                          <div className="card-actions justify-start">
                            <Link to={`/update/${toy?._id}`}>
                              <button className="text-sm bg-[#32c770] px-3 py-3 rounded-sm text-white">
                                Update
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div  className="absolute -top-4 shadow-lg px-2 rounded-full right-0" >
                        <FontAwesomeIcon className="w-full" style={{color:"red" , cursor:"pointer" }} icon={faMultiply}></FontAwesomeIcon>
                      </div>
                    </div>
                  ))}
                </div>
              </h1>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default MyToy;

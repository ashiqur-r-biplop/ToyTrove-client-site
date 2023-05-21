import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvide/AuthProvider";
import "react-tabs/style/react-tabs.css";
import useTitle from "../CustomeHook/Hook";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "@smastrom/react-rating/style.css";
import { Rating, Star } from "@smastrom/react-rating";
import Swal from "sweetalert2";
const myStyles = {
  itemShapes: Star,
  activeFillColor: "#32c770",
  inactiveFillColor: "#d8d8d8",
};
const Profile = () => {
  useTitle("Profile");
  const { user } = useContext(AuthContext);
  const [control, setControl] = useState(false);

  const [comments, setComment] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/myComment?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setComment(data);
      });
  }, [control]);

  const handleDeleteComment = (id) => {
    if (id) {
      Swal.fire({
        title: "Are you sure You want to delete this Comment ?",
        text: "Please confirm !!!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#32c770",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirm",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/commentDelete/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((result) => {
              if (result?.deletedCount) {
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "deleted successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                setControl(!control);
              }
            });
        }
      });
    }
  };

  console.log(comments);
  return (
    <div className="md:mt-28">
      <div className="container mx-auto my-5">
        <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-semibold my-5 md:mt-20 mb-12">
          My <span className="text-[#32c770]">Profile</span>
        </h1>
        <div className="rounded-full flex flex-col md:flex-row justify-center items-center w-full my-5">
          <img
            src={user?.photoURL}
            className="rounded-full md:w-60 w-32 h-full border-[#32c770] border-4"
            alt=""
          />
          <div className="md:ms-2 text-center md:text-start mt-3 md:mt-0">
            <h1 className="w-full  md:text-3xl text-xl">{user?.displayName}</h1>
            <p className="">{user?.email}</p>
          </div>
        </div>
        <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-semibold my-5 md:mt-20 mb-12">
          Profile <span className="text-[#32c770]">Setting</span>
        </h1>

        <div>
          {comments.length === 0 && (
            <div className="md:mt-28 mt-5 container mx-auto">
              <div className="flex flex-col justify-start items-center">
                <h1 className="text-center w-full lg:text-2xl md:w-1/2 mx-auto">
                  {" "}
                  You first comment from the home page{" "}
                  <span className="text-[#32c770]">
                    and then come to see the profile comments
                  </span>
                </h1>
                <button
                  onClick={() => navigate("/")}
                  className="bg-[#32c770] px-4 py-2 rounded-full text-white my-3"
                >
                  <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                  <span className="ms-2">Back to Home</span>
                </button>
              </div>
            </div>
          )}

          {comments.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 m-3">
              {comments.map((comment, i) => (
                <div
                  key={i}
                  className="card mx-auto md:w-96 bg-base-100 shadow-xl m-4"
                >
                  <div className="card-body">
                    <h2 className="">
                      <span className="text-[#32c770] font-semibold">
                        CommentID:
                      </span>{" "}
                      {comment?._id}
                    </h2>
                    <p className="">
                      <span className="text-[#32c770] font-semibold">
                        Comment:{" "}
                      </span>
                      {comment?.comments}
                    </p>
                    <p className="flex">
                      <span className="text-[#32c770] font-semibold">
                        Rating:{" "}
                      </span>
                      <Rating
                        style={{ maxWidth: 100 }}
                        className="ms-2"
                        value={comment?.ratings}
                        itemStyles={myStyles}
                        readOnly
                      />
                    </p>
                    {comment?.checked && (
                      <p className="">
                        <span className="text-[#32c770] font-semibold">
                          Save Your name and email :
                        </span>{" "}
                        <span className="font-semibold">YES</span>
                      </p>
                    )}
                    { !comment?.checked && <p className="">
                      <span className="text-[#32c770] font-semibold">
                        Save Your name and email :
                      </span>{" "}
                      <span className="font-semibold">NO</span>
                    </p>}
                    <div className="card-actions justify-end">
                      <button
                        onClick={() => handleDeleteComment(comment?._id)}
                        className="bg-[#ff0000c0] px-5 py-3 text-white rounded-lg"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;

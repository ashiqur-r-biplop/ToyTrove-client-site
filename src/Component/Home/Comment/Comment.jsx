import React, { useContext, useState } from "react";
import ReactStars from "react-rating-stars-component";
import "./Comment.css";
import { FaCommentAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProvide/AuthProvider";

const Comment = () => {
  const [rating, setRating] = useState(0);
  const [check, setCheck] = useState(false);
  const { user } = useContext(AuthContext);
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const handleCheck = (e) => {
    setCheck(e.target.checked);
  };

  const handleComment = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const comment = form.comment.value;
    const checked = check;
    // console.log(check);
    const ratings = rating;
    const ourComment = { name, email, comments: comment, ratings, checked };

    fetch("http://localhost:5000/comment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ourComment),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result?.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Comment Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-semibold my-5 mt-20 mb-12">
        Our <span className="text-[#32c770]">Comments</span>
      </h1>
      <div className="m-3">
        <h1 className="uppercase text-xl font-bold">Leave a Reply</h1>
        <p className="text-lg">
          You email address will no be publish. Required fields are marked.
        </p>
        <div className="flex items-center">
          <span className="me-2">Retting </span>{" "}
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#32c770"
          />
        </div>
        <form
          onSubmit={handleComment}
          className="flex mx-auto flex-col justify-start items-start w-full"
        >
          <div className="allComment-input mx-auto">
            <textarea
              style={{ borderRadius: "5px" }}
              className="w-full md:w-3/4"
              name="comment"
              id=""
              cols="30"
              rows="10"
              placeholder="Your Comment"
              required
            ></textarea>
            <input
              style={{ borderRadius: "5px" }}
              className="w-full md:w-3/4"
              type="text"
              value={user?.displayName}
              name="name"
              placeholder="Your Name"
              required
            />
            <input
              style={{ borderRadius: "5px" }}
              value={user?.email}
              className="w-full md:w-3/4"
              name="email"
              type="Email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="flex justify-start items-start my-3">
            <div>
              <input type="checkbox" onChange={handleCheck} name="" id="" />
            </div>
            <p className="ms-1">
              Save my name, email and website in this browser for the next time
              I comment.
            </p>
          </div>
          <button
            style={{ cursor: "pointer" }}
            type="submit"
            className="bg-[#32c770] text-[#000000] px-4 py-3 md:px-10 md:text-center md:py-4 rounded-full font-semibold flex items-center uppercase"
          >
            Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Comment;

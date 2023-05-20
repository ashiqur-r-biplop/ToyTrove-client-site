import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvide/AuthProvider";

import DataNotAvailable from "../DataNotAvailable/DataNotAvailable";
import Swal from "sweetalert2";
import useTitle from "../CustomeHook/Hook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Update = () => {
  useTitle("Update");
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const [categories, setCategories] = useState("");
  const handleCategory = (e) => {
    setCategories(e.target.value);
  };
  useEffect(() => {
    fetch(`http://localhost:5000/AllData`)
      .then((res) => res.json())
      .then((datas) => {
        const singleToy = datas.find((data) => data?._id === id);
        setToys(singleToy);
        setCategories(singleToy?.category);
      });
  }, []);
  console.log(toys);
  const handleMyToys = (e) => {
    e.preventDefault();
    const form = e.target;
    const sellerName = form?.sellerName?.value;
    const sellerEmail = form?.email?.value;
    const photoUrl = form?.photo?.value;
    const toyName = form?.toyName?.value;
    const price = form?.price?.value;
    const quantity = form?.quantity?.value;
    const description = form?.description?.value;
    const category = categories;
    const myToy = {
      sellerName,
      sellerEmail,
      category,
      photoUrl,
      toyName,
      price,
      quantity,
      description,
    };

    if (user) {
      Swal.fire({
        title: "Are you sure Update This toy?",
        text: "Please confirm !!!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#32c770",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirm",
      }).then((result) => {
        if (result.isConfirmed) {
          if (user?.email === sellerEmail) {
            fetch(`http://localhost:5000/update/${id}`, {
              method: "PATCH",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(myToy),
            })
              .then((res) => res.json())
              .then((result) => {
                if (result?.modifiedCount) {
                  form.reset();
                  navigate("/myToys");
                }
              });
          } else {
            Swal.fire({
              icon: "error",
              buttonsStyling: {
                color: "#32c770",
                backgroundColor: "#32c770",
              },
              title: "Oops...",
              title: `You Email is not valid`,
              footer: "Please Provide Me User Email",
            });
          }
        }
      });
    }
  };

  if (!toys) {
    return <DataNotAvailable></DataNotAvailable>;
  }
  return (
    <div className="md:mt-28 mt-5 container mx-auto">
      <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-semibold my-5 mt-20 mb-12">
        Update <span className="text-[#32c770]">Toys</span>
      </h1>
      <div className="">
        <div className="text-center">
          <button
            onClick={() => navigate(-1)}
            className="bg-[#32c770] px-4 py-2 rounded-full text-white"
          >
            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
            <span className="ms-2">Back Now</span>
          </button>
        </div>
        <form className="" onSubmit={handleMyToys}>
          <div className="card-body">
            <div className="md:flex justify-between w-full">
              <div className="md:w-3/4">
                <div className="form-control md:w-3/4 ">
                  <label className="label">
                    <span className="label-text">Seller Name</span>
                  </label>
                  <input
                    name="sellerName"
                    defaultValue={user?.displayName}
                    type="text"
                    placeholder="Seller Name"
                    className="input w-full input-bordered"
                    required
                  />
                </div>
                <div className="form-control md:w-3/4 ">
                  <label className="label">
                    <span className="label-text">Seller Email</span>
                  </label>
                  <input
                    type="email"
                    defaultValue={user?.email}
                    placeholder="Please Provide Login Email"
                    name="email"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control md:w-3/4 ">
                  <label className="label">
                    <span className="label-text">Picture URL</span>
                  </label>
                  <input
                    type="url"
                    defaultValue={toys?.photoUrl}
                    placeholder="Picture URL"
                    className="input input-bordered w-full"
                    name="photo"
                    required
                  />
                </div>
                <div className="form-control md:w-3/4 ">
                  <label className="label">
                    <span className="label-text">Toy Name</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={toys?.toyName}
                    name="toyName"
                    placeholder="Toy Name"
                    className="input input-bordered w-full "
                    required
                  />
                </div>
              </div>
              <div className="md:w-3/4">
                <div className="form-control md:w-3/4 mb-5 md:ml-auto">
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  <select
                    onChange={handleCategory}
                    value={categories}
                    name="cars"
                    className="input input-bordered w-full"
                    id="cars"
                  >
                    <option value="TeddyBear">Teddy bear</option>
                    <option value="Horse">Horse</option>
                    <option value="Dogs">Dogs</option>
                  </select>
                </div>
                <div className="form-control md:w-3/4 md:ml-auto">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    defaultValue={toys?.price}
                    type="number"
                    placeholder="Price"
                    name="price"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div className="form-control md:w-3/4 md:ml-auto">
                  <label className="label">
                    <span className="label-text">Available quantity</span>
                  </label>
                  <input
                    defaultValue={toys?.quantity}
                    type="text"
                    placeholder="Available quantity"
                    name="quantity"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control md:w-3/4 md:ml-auto">
                  <label className="label">
                    <span className="label-text">Detail description</span>
                  </label>

                  <textarea
                    defaultValue={toys?.description}
                    type="text"
                    placeholder="Detail description"
                    name="description"
                    className="input input-bordered w-full pt-2"
                    required
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="form-control mt-6 ">
              <input
                type="submit"
                className="btn bg-[#32c770] hover:bg-[#32c770] border-0"
                value="Upload"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;

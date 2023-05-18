import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

const AddToys = () => {
  const [rating, setRating] = useState(0);
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
  return (
    <div className="mt-28 container mx-auto">
      <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-semibold my-5 mt-20 mb-12">
        Add <span className="text-[#32c770]">Toys</span>
      </h1>
      <div className="">
        <form className="">
          <div className="">
            <div className="">
              <div className="">
                <div className="card-body">
                  <div className="md:flex justify-between w-full">
                    <div className="md:w-3/4">
                      <div className="form-control md:w-3/4 ">
                        <label className="label">
                          <span className="label-text">Seller Name</span>
                        </label>
                        <input
                          name="sellerName"
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
                          placeholder="Seller Email"
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
                          name="ToyName"
                          placeholder="Toy Name"
                          className="input input-bordered w-full "
                          required
                        />
                      </div>
                    </div>
                    <div className="md:w-3/4 mr-auto">
                      <div className="form-control md:w-3/4 mb-5 ml-0">
                        <label className="label">
                          <span className="label-text">Category</span>
                        </label>
                        <select
                          name="cars"
                          className="input input-bordered w-full ml-0"
                          id="cars"
                        >
                          <option value="TeddyBear">Teddy bear</option>
                          <option value="Horse">Horse</option>
                          <option value="Dogs">Dogs</option>
                        </select>
                      </div>
                      <div className="form-control md:w-3/4 ">
                        <label className="label">
                          <span className="label-text">Price</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Price"
                          name="price"
                          className="input input-bordered w-full"
                          required
                        />
                      </div>

                      <div className="form-control md:w-3/4 ">
                        <label className="label">
                          <span className="label-text">Available quantity</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Available quantity"
                          name="quantity"
                          className="input input-bordered w-full"
                          required
                        />
                      </div>
                      <div className="form-control md:w-3/4 ">
                        <label className="label">
                          <span className="label-text">Detail description</span>
                        </label>

                        <textarea
                          type="text"
                          placeholder="Detail description"
                          name="description"
                          className="input input-bordered w-full"
                          required
                          id=""
                          cols="30"
                          rows="10"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="me-2">Retting : </span>{" "}
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
                  <div className="form-control mt-6 ">
                    <input
                      type="submit"
                      className="btn bg-[#32c770] hover:bg-[#32c770] border-0"
                      value="Upload"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToys;

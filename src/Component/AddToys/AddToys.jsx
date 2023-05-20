import React, { useContext, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { AuthContext } from "../../AuthProvide/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../CustomeHook/Hook";

const AddToys = () => {
  useTitle("AddToys");
  const [ratings, setRatings] = useState(0);
  const { user } = useContext(AuthContext);
  const [categories, setCategories] = useState("Teddy bear");
  const ratingChanged = (newRating) => {
    setRatings(newRating);
  };
  const handleCategory = (e) => {
    setCategories(e.target.value);
  };
  const handleMyToys = (e) => {
    e.preventDefault();
    const form = e.target;
    const sellerName = form?.sellerName?.value;
    const sellerEmail = form?.email?.value;
    const photoUrl = form?.photo?.value;
    const toyName = form?.toyName?.value;
    const price = form?.price?.value;
    const quantity = form?.quantity?.value;
    const rating = ratings;
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
      rating,
      description,
    };
    // console.log(myToy);
    if (user?.email === sellerEmail) {
      fetch("https://toy-trove-server-site.vercel.app/allToys", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(myToy),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result?.insertedId) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Add A Toy SuccessFull",
              showConfirmButton: false,
              timer: 1500,
            });
            form.reset();
          }
        });
    } else {
      Swal.fire({
        icon: 'error',
        buttonsStyling:{
          color: "#32c770",
          backgroundColor: "#32c770"
        },
        title: 'Oops...',
        title: `You Email is not valid`,
        footer: 'Please Provide Me User Email'
      })
  }
}

  return (
    <div className="md:mt-28 mt-5 container mx-auto">
      <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-semibold my-5 mt-20 mb-12">
        Add <span className="text-[#32c770]">Toys</span>
      </h1>
      <div className="">
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
                    value={user?.displayName}
                    disabled
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
                    value={user?.email}
                    disabled
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
        </form>
      </div>
    </div>
  );
};

export default AddToys;

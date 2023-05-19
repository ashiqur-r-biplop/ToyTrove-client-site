import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyToy = () => {
  const navigate = useNavigate();
  const [toys, setToys] = useState([]);

  const handleViewDetails = (id) => {
    Swal.fire({
      title: "Do you really want to read this page?",
      text: "Confirm now !!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#32c770",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(`/details/${id}`);
      }
    });
  };
  return (
    <div>
      <>
        <div className="md:mt-28 mt-5 container mx-auto">
          <div className="text-center my-5">
            <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-semibold my-5 mt-20 mb-12">
              All <span className="text-[#32c770]">Toys</span>
            </h1>
            <div className="flex justify-center items-start m-3">
              <input
                onChange={handleSearch}
                className="w-full md:w-2/4 px-2"
                type="text"
                placeholder="Search By Toy Name"
              />
              <button className="bg-[#32c770] py-3 px-3 font-semibold text-white">
                Search
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-x border border-bottom divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#32c770] uppercase tracking-wider">
                    Seller
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#32c770] uppercase tracking-wider">
                    Toy Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#32c770] uppercase tracking-wider">
                    Sub-category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#32c770] uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#32c770] uppercase tracking-wider">
                    Available Quantity
                  </th>
                  <th className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {toys?.map((toy, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {toy?.sellerName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {toy?.toyName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {toy?.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      ${toy?.price}
                    </td>
                    <td className="px-16 py-4 whitespace-nowrap ">
                      {toy?.quantity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button onClick={() => handleViewDetails(toy?._id)}>
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    </div>
  );
};

export default MyToy;

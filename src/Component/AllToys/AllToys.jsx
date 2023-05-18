import React, { useEffect, useState } from "react";
import "./AllToys.css";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/allToys/${search}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [search]);
  return (
    <>
      <div className="mt-28 container mx-auto">
        <div className="text-center my-5">
          <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-semibold my-5 mt-20 mb-12">
            All <span className="text-[#32c770]">Toys</span>
          </h1>
          <div className="flex justify-center m-4">
            <input
              onChange={handleSearch}
              className="w-full md:w-2/4 px-2 md:py-3"
              type="text"
              placeholder="Search By Toy Name"
            />
            <button className="bg-[#32c770] py-4 px-3 font-semibold text-white">
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
              {toys.slice(0, 20).map((toy, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{toy.Seller}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{toy.toyName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {toy.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">${toy.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {toy.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <a
                      href={toy.detailsUrl}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      View Details
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllToys;
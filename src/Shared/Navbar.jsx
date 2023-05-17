import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Image/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#f74d69] py-2">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center justify-start sm:justify-between w-full">
            <div className="flex-shrink-0">
              <Link to="/" className="text-black font-bold text-lg">
                <div className="flex items-center justify-start w-full">
                  <img src={logo} className="w-12" alt="" />
                  <span>ToyTrove</span>
                </div>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex items-center space-x-4">
                <Link
                  to="/"
                  className="text-[#000] hover:bg-[#d10054] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/allToy"
                  className="text-[#000] hover:bg-[#d10054] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  All Toys
                </Link>
                <Link
                  to="/myToys"
                  className="text-[#000] hover:bg-[#d10054] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  MyToys
                </Link>
                <Link
                  to="/addToy"
                  className="text-[#000] hover:bg-[#d10054] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  add a Toy
                </Link>
                <Link
                  to="/blogs"
                  className="text-[#000] hover:bg-[#d10054] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Blogs
                </Link>
                <Link to="/login">
                  <button className="btn bg-[#d10054] hover:bg-[#d10054] border-none">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex sm:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#000] hover:text-black hover:bg-[#f70d69] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-black"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`${isOpen ? "block" : "hidden"} sm:hidden`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="text-[#000] hover:bg-[#f70d69] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/allToy"
              className="text-[#000] hover:bg-[#f70d69] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              All Toy
            </Link>
            <Link
              to="/myToys"
              className="text-[#000] hover:bg-[#f70d69] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              MYToy
            </Link>
            <Link
              to="/addToy"
              className="text-[#000] hover:bg-[#f70d69] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Add a Toy
            </Link>
            <Link
              to="/blogs"
              className="text-[#000] hover:bg-[#f70d69] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Blogs
            </Link>
            <Link to="/login">
              <button className="btn mt-2 bg-[#d10054] hover:bg-[#d10054] border-none">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

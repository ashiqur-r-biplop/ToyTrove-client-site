import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Image/logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#09542f] py-16  text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mt-4">
          <Link to="/" className="text-white font-bold text-lg ">
            <div className="flex flex-col items-center justify-center w-full border-white">
              <img src={logo} className="w-36" alt="" />
            </div>
          </Link>
          <ul className="flex justify-center my-2 space-x-9">
            <li>
              <Link to="/" className="text-white hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="text-white hover:text-white">
                Blogs
              </Link>
            </li>
            <li>
              <span className="text-white hover:text-white">Contact Us</span>
            </li>
          </ul>
          <div className="text-white flex justify-center space-x-10 my-3">
            <FaFacebook className="border border-white p-3 text-4xl rounded-full" />
            <FaInstagram className="border border-white p-3 text-4xl rounded-full" />
            <FaTwitter className="border border-white p-3 text-4xl rounded-full" />
          </div>
          <div className="mt-4 md:mt-0 md:order-1">
            <p className="text-center text-white-400">
              &copy; {new Date().getFullYear()} by name this website "Toy Trove"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

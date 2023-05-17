import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Image/logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#32c770] py-8  text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mt-4">
          <Link to="/" className="text-black font-bold text-lg ">
            <div className="flex flex-col items-center justify-center w-full border-black-black">
              <img src={logo} className="w-24" alt="" />
              <span className="tracking-widest text-3xl mb-5">ToyTrove</span>
            </div>
          </Link>
          <ul className="flex justify-center my-2 space-x-9">
            <li>
              <Link to="/" className="text-black hover:text-black">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="text-black hover:text-black">
                Blogs
              </Link>
            </li>
            <li>
              <span className="text-black hover:text-black">Contact Us</span>
            </li>
          </ul>
          <div className="text-black flex justify-center space-x-10 my-3">
            <FaFacebook className="border border-black p-3 text-4xl rounded-full" />
            <FaInstagram className="border border-black p-3 text-4xl rounded-full" />
            <FaTwitter className="border border-black p-3 text-4xl rounded-full" />
          </div>
          <div className="mt-4 md:mt-0 md:order-1">
            <p className="text-center text-black-400">
              &copy; {new Date().getFullYear()} by name this website "The Toy Trove"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

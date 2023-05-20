import React from "react";
import useTitle from "../CustomeHook/Hook";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="container mx-auto">
      <div className="md:mt-28">
        <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-semibold my-5 mt-20 mb-12">
          My <span className="text-[#32c770]">Blogs page</span>
        </h1>
        <div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </div>
            <div className="collapse-content">
              <p>
                <span className="font-semibold text-[#32c770]">Refresh Token: </span>
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
            Compare SQL and NoSQL databases?
            </div>
            <div className="collapse-content">
              <p>
                tabIndex={0} attribute is necessary to make the div focusable
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
            What is express js? What is Nest JS ?
            </div>
            <div className="collapse-content">
              <p>
                tabIndex={0} attribute is necessary to make the div focusable
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
            What is MongoDB aggregate and how does it work ?
            </div>
            <div className="collapse-content">
              <p>
                tabIndex={0} attribute is necessary to make the div focusable
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

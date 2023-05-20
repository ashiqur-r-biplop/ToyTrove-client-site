import React from "react";
import useTitle from "../CustomeHook/Hook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  useTitle("Blog");
  const navigate = useNavigate();
  return (
    <div className="container mx-auto">
      <div className="md:mt-28 m-3">
        <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-semibold my-5 mt-20 mb-12">
          My <span className="text-[#32c770]">Blogs page</span>
        </h1>
        <div className="text-center my-3">
          <button
            onClick={() => navigate(-1)}
            className="bg-[#32c770] px-4 py-2 rounded-full text-white"
          >
            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
            <span className="ms-2">Back Now</span>
          </button>
        </div>
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
                <span className="font-semibold text-[#32c770]">
                  Refresh Token:{" "}
                </span>
                <span>
                  A refresh token is a credential used to obtain a new access
                  token when the current access token expires or becomes
                  invalid.It is typically a string of characters that is issued
                  by an authentication server upon successful authentication.
                  Access tokens are used to authenticate and authorize API
                  requests. They are included in the request headers or as
                  parameters when accessing protected resources. Access tokens
                  are usually short-lived and have an expiration time to enhance
                  security. Once expired, they need to be renewed or refreshed
                  using a refresh token. <br />
                  Storing the access token in memory provides better security as
                  it is not accessible to JavaScript and is automatically
                  cleared when the page is closed. Storing the access token in
                  browser cookies or local storage allows the token to persist
                  even if the page is refreshed or reopened.
                </span>
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
                SQL (Structured Query Language) and NoSQL (Not Only SQL) are two
                different types of database management systems that differ in
                various aspects. <br />
                <span className="font-semibold text-[#32c770]">
                  Structured Query Language:{" "}
                </span>
                databases use a structured data model based on tables with
                predefined schemas. They enforce strict data consistency and
                integrity through the use of ACID (Atomicity, Consistency,
                Isolation, Durability) properties. They follow a rigid schema
                that requires predefined tables, columns, and relationships.{" "}
                <br />
                <span className="font-semibold text-[#32c770]">
                  Not Structured Query Language:{" "}
                </span>
                NoSQL databases use a flexible data model that allows for
                unstructured or semi-structured data storage. They can store
                data in various formats such as key-value pairs, documents,
                wide-column stores, or graph databases. NoSQL databases
                prioritize scalability and performance over strict data
                consistency.
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
                <span className="font-semibold text-[#32c770]">
                  Express JS:{" "}
                </span>
                Express.js is a popular web application framework for Node.js.
                It provides a minimal and flexible set of features for building
                web applications and APIs. Express.js simplifies the process of
                handling HTTP requests, routing, middleware integration, and
                response handling. It follows a middleware-based approach,
                allowing developers to define middleware functions that can be
                executed sequentially for request processing. Express.js is
                known for its simplicity, performance, and extensive ecosystem
                of middleware and plugins that enhance its functionality. <br />
                <span className="font-semibold text-[#32c770]">Nest JS: </span>
                Nest.js, on the other hand, is a progressive and opinionated
                framework for building scalable and maintainable server-side
                applications. It is built on top of Node.js and leverages
                TypeScript as its primary language. Nest.js combines elements
                from both object-oriented and functional programming paradigms,
                taking inspiration from Angular and other frameworks to provide
                a structured and modular approach to application development. It
                follows the architectural pattern of modules, controllers, and
                services, emphasizing separation of concerns and dependency
                injection. Nest.js offers built-in support for features like
                routing, authentication, validation, and more. It also
                integrates well with other libraries and frameworks.
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
                In MongoDB, the aggregate function is used to perform complex
                data aggregation operations on collections. It allows you to
                process and transform the data in various ways, such as
                grouping, filtering, sorting, and computing aggregate values.{" "}
                <br />
                <span className="font-semibold text-[#32c770] text-xl border-b-2 border-[#32c770] my-2">
                  Aggregate pipeline <br />
                </span>
                <span className="font-semibold text-[#32c770]">$match:</span>{" "}
                Filters the documents based on specified conditions. <br />{" "}
                <span className="font-semibold text-[#32c770]"> $group:</span>
                Groups documents together based on a specified key and allows
                performing aggregate operations on grouped data. <br />{" "}
                <span className="font-semibold text-[#32c770]">$project:</span>
                Shapes the documents by including or excluding specific fields
                or by adding computed fields. <br />
                <span className="font-semibold text-[#32c770]">$sort:</span>
                Sorts the documents based on specified criteria. <br />{" "}
                <span className="font-semibold text-[#32c770]">$limit:</span>
                Limits the number of documents returned. <br />{" "}
                <span className="font-semibold text-[#32c770]">$skip:</span>
                Skips a specified number of documents in the result set. <br />
                <span className="font-semibold text-[#32c770]">$unwind:</span>
                Deconstructs an array field into separate documents for each
                element.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

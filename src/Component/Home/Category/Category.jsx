import Aos from "aos";
import React, { useContext, useEffect, useState } from "react";
// import Rating from "react-rating";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvide/AuthProvider";
import Swal from "sweetalert2";
import "./Category.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "@smastrom/react-rating/style.css";
import { Rating, Star } from "@smastrom/react-rating";
const myStyles = {
  itemShapes: Star,
  activeFillColor: "#32c770",
  inactiveFillColor: "#d8d8d8",
};

const Category = () => {
  const [tabCategory, setTabCategory] = useState("Teddy");
  const [tabsData, setTabsData] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleTabs = (title) => {
    setTabCategory(title);
  };
  useEffect(() => {
    fetch(
      `https://toy-trove-server-site.vercel.app/toys?category=${tabCategory}`
    )
      .then((res) => res.json())
      .then((data) => setTabsData(data));
    Aos.init();
  }, [tabCategory]);

  const handleViewDetails = (id) => {
    if (!user) {
      Swal.fire({
        title: "You have to log in first to view details",
        text: "Please Login !!!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#32c770",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to Login! ",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate(`/details/${id}`);
        }
      });
    } else {
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
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your Confirmation is Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(`/details/${id}`);
        }
      });
    }
  };

  const tabPanel = ["tab1", "tab2", "tab3"];
  return (
    <div className="container mx-auto my-20" data-aos="fade-down">
      <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-semibold my-5 mt-20 mb-12">
        Our <span className="text-[#32c770] border-[#32c770]">Category</span>
      </h1>
      <div>
        <Tabs className="text-center">
          <TabList>
            <Tab onClick={() => handleTabs("Teddy")}>Teddy bear</Tab>
            <Tab onClick={() => handleTabs("Horse")}>Horse</Tab>
            <Tab onClick={() => handleTabs("Dogs")}>Dogs</Tab>
          </TabList>
          {tabPanel?.map((tab, i) => (
            <TabPanel key={i}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3  grid-cols-1">
                {tabsData?.map((data, i) => (
                  <div
                    className="card md:w-96 bg-base-100 shadow-xl my-3 mx-3 md:mx-auto lg:mt-14"
                    key={i}
                    data-aos="fade-down"
                  >
                    <LazyLoadImage
                      style={{ height: "250px", width: "100%" }}
                      src={data?.photoUrl}
                      className="card-img-top"
                      loading="lazy"
                      effect="blur"
                      alt={data?.toyName}
                      placeholderSrc={data?.photoUrl.blurhash}
                    />

                    <div className="card-body relative">
                      <h2 className="card-title absolute -top-10 bg-white px-3 py-2 shadow ">
                        Name: {data?.toyName}
                      </h2>
                      <p className="text-start">Price : ${data?.price}</p>
                      <div className="flex items-center ">
                        <span className="">Ratings: </span>

                        <Rating
                          style={{ maxWidth: 100 }}
                          className="ms-2"
                          value={data?.rating}
                          itemStyles={myStyles}
                          readOnly
                        />
                      </div>
                      <div className="card-actions">
                        <button
                          onClick={() => handleViewDetails(data?._id)}
                          className="bg-[#13a95f] text-[#fff] font-semibold px-3 py-2 rounded flex items-center uppercase"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Category;

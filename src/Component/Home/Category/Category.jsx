import Aos from "aos";
import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "aos/dist/aos.css";

const Category = () => {
  const [tabCategory, setTabCategory] = useState("Teddy");
  const [tabsData, setTabsData] = useState([]);

  const handleTabs = (title) => {
    setTabCategory(title);
  };
  useEffect(() => {
    fetch(`http://localhost:5000/toys?category=${tabCategory}`)
      .then((res) => res.json())
      .then((data) => setTabsData(data))
    Aos.init();
  }, [tabCategory]);

  const tabPanel = ["data1", "data2", "data3"];
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
                    <figure>
                      <img src={data?.picture} alt="" />
                    </figure>
                    <div className="card-body relative">
                      <h2 className="card-title absolute -top-10 bg-white px-3 py-2 shadow ">
                        Name: {data?.toyName}
                      </h2>
                      <p className="text-start">Price : ${data?.price}</p>
                      <div className="flex items-center">
                        <span className="mb-3">Ratings: </span>
                       
                        <Rating
                          className="ms-2"
                          initialRating={data?.rating}
                          size={24}
                          emptyIcon={<i className="far fa-star"></i>}
                          halfIcon={<i className="fa fa-star-half-alt"></i>}
                          fullIcon={<i className="fa fa-star"></i>}
                          readonly
                        />
                      </div>
                      <div className="card-actions">
                        <button className="bg-[#32c770] text-[#fff] font-semibold px-3 py-2 rounded flex items-center uppercase">
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

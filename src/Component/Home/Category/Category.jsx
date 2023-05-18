import Aos from "aos";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "aos/dist/aos.css";

const Category = () => {
  const [tabTitle, setTabTitle] = useState("Teddy");
  const [tabsData, setTabsData] = useState([]);

  const handleTabs = (title) => {
    setTabTitle(title);
  };
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        const filterData = data.filter(
          (tabData) => tabData?.title === tabTitle
        );
        setTabsData(filterData);
      });
    Aos.init();
  }, [tabTitle]);

  const tabPanel = ["data1", "data2", "data3"];
  return (
    <div className="container mx-auto my-20" data-aos="zoom-out">
      <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-semibold my-5 mt-20 ">
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
              <div
                className="grid md:grid-cols-2 grid-cols-1"
                data-aos="zoom-in-right"
              >
                {tabsData?.map((data) => (
                  <div className="card md:w-96 bg-base-100 shadow-xl  m-3">
                    <figure>
                      <img src={data?.picture} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">Name: {data?.name}</h2>
                      <p className="text-start">Price : ${data?.price}</p>
                      <div className="flex items-center">
                        <span className="mb-3">Ratings: </span>
                        <Rating
                        className="ms-2"
                          initialRating={data?.rating}
                          placeholderRating={<FaStar></FaStar>}
                          readonly
                        />
                      </div>
                      <div className="card-actions justify-end">
                        <button className="bg-[#32c770] text-[#000000] px-4 py-3 md:px-10 md:py-4 rounded-full font-semibold flex items-center uppercase">
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

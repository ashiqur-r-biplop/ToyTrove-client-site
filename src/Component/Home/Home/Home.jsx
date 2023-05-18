import React from "react";
import Header from "../Header/Header";
import Gallery from "../Gallery/Gallery";
import Category from "../Category/Category";
import Popular from "../Popular/Popular";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Gallery></Gallery>
      <Category></Category>
      <Popular></Popular>
    </div>
  );
};

export default Home;

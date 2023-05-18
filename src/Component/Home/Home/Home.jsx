import React from "react";
import Header from "../Header/Header";
import Gallery from "../Gallery/Gallery";
import Category from "../Category/Category";
import Popular from "../Popular/Popular";
import Comment from "../Comment/Comment";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Gallery></Gallery>
      <Category></Category>
      <Popular></Popular>
      <Comment></Comment>
    </div>
  );
};

export default Home;

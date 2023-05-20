import React from "react";
import Header from "../Header/Header";
import Gallery from "../Gallery/Gallery";
import Category from "../Category/Category";
import Popular from "../Popular/Popular";
import Comment from "../Comment/Comment";
import useTitle from "../../CustomeHook/Hook";

const Home = () => {
  useTitle('Home')
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

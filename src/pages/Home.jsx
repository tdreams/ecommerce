import React from "react";
import Hero from "../components/home/Hero";
import Wrapper from "../components/Wrapper";
import Feature from "../components/home/Feature";
import Catalogs from "../components/home/Catalogs";
import Brands from "../components/home/Brands";
import Recommended from "../components/home/Recommended";
import NewArrival from "../components/home/NewArrival";
import Add from "../components/home/Add";

const Home = () => {
  return (
    <div>
      <Hero />
      <Wrapper>
        <Feature />
        <Brands />
        <Catalogs />
        <Recommended />
        <Add />
        <NewArrival />
        <div className="mt-40"></div>
      </Wrapper>
    </div>
  );
};

export default Home;

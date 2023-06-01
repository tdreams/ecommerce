import React from "react";
import Hero from "../components/home/Hero";
import Wrapper from "../components/Wrapper";
import Feature from "../components/home/Feature";

const Home = () => {
  return (
    <div>
      <Hero />
      <Wrapper>
        <Feature />
      </Wrapper>
    </div>
  );
};

export default Home;

import React from "react";
import ProductsList from "../Components/ProductsList";
import Contact from "../Components/Contact";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <ProductsList />
        <Contact />
    </div>
  );
};

export default Home;

import React from "react";
import ProductsList from "../Components/ProductsList";
import Contact from "../Components/Contact";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <ProductsList />
      <Contact />
      <footer className="h-16 p-4">
        <p className="ml-4 text-xl text-gray-800">©The Artist</p>
      </footer>
    </div>
  );
};

export default Home;

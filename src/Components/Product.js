import React from "react";
import { useSelector } from "react-redux";

const Product = () => {
  const products = useSelector((state) => state.allProducts.products);
  return (
    <div className="p-2 w-64 border-2">
      <img src="" alt="" />
      <h1>Product's title</h1>
      <p>Product's description</p>
      <p>Product's price</p>
    </div>
  );
};

export default Product;

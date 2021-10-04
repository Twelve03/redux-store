import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, image, title } = product;

  return (
    <div className="m-10">
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} className="w-80 h-80 shadow-lg" />
        <h1 className="mt-7 text-xl text-center">{title}</h1>
      </Link>
    </div>
  );
};

export default ProductCard;

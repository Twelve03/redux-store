import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, image, title, description, price } = product;

  return (
    <div className="p-2 m-4 w-64 border-2">
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{price}</p>
      </Link>
    </div>
  );
};

export default ProductCard;

import React from "react";

const ProductCard = ({ product }) => {
  const { image, title, description, price } = product;

  return (
    <div className="p-2 w-64 border-2">
      <img src={image} alt="" />
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};

export default ProductCard;

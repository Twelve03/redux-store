import React from "react";

const CartItem = ({ itemData }) => {
  return (
    <div className="m-4 flex flex-col border-2 w-72">
      <div className="flex">
        <img src={itemData.image} alt={itemData.title} className="w-32" />
        <div>
          <p>{itemData.title}</p>
          <p>${itemData.price}</p>
        </div>
      </div>
      <div className="flex w-full items-center justify-around bg-gray-200">
        <div>
          <p>Quantity</p>
          {itemData.qty}
        </div>
        <div>
          <p>total</p>
          <p>${itemData.qty * itemData.price}</p>
        </div>
        <i className="fas fa-trash"></i>
      </div>
    </div>
  );
};

export default CartItem;

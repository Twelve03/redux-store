import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { adjustQty, removeFormCart } from "../redux/actions/productAction";

const CartItem = ({ itemData }) => {
  const [quantity, setQty] = useState(itemData.qty);
  const dispatch = useDispatch();

  return (
    <div className="m-4 flex flex-col w-72">
      <div className="flex">
        <img src={itemData.image} alt={itemData.title} className="w-32" />
        <div className="ml-3">
          <p className="text-lg font-semibold">{itemData.title}</p>
          <p className="mt-1 font-medium text-green-500">${itemData.price}</p>
        </div>
      </div>
      <div className="p-2 mt-4 flex w-full items-center justify-around bg-gray-200 rounded-sm">
        <div className="flex flex-col items-center">
          <p>Quantity</p>
          <input
            type="number"
            min="1"
            className="w-10 text-center"
            id="qty"
            value={quantity}
            onChange={(e) => {
              setQty(e.target.value);
              dispatch(adjustQty(itemData.id, e.target.value));
            }}
          />
        </div>
        <div>
          <p className="font-semibold">Total</p>
          <p>${itemData.qty * itemData.price}</p>
        </div>
        <i
          onClick={() => dispatch(removeFormCart(itemData.id))}
          className="fas fa-trash cursor-pointer"
        ></i>
      </div>
    </div>
  );
};

export default CartItem;

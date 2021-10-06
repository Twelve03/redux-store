import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { adjustQty, removeFormCart } from "../redux/actions/productAction";

const CartItem = ({ itemData }) => {
  const [quantity, setQty] = useState(itemData.qty);
  const dispatch = useDispatch();

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
          <input
            type="number"
            min="1"
            id="qty"
            value={quantity}
            onChange={(e) => {
              setQty(e.target.value);
              dispatch(adjustQty(itemData.id, e.target.value));
            }}
          />
        </div>
        <div>
          <p>total</p>
          <p>${itemData.qty * itemData.price}</p>
        </div>
        <i
          onClick={() => dispatch(removeFormCart(itemData.id))}
          className="fas fa-trash"
        ></i>
      </div>
    </div>
  );
};

export default CartItem;

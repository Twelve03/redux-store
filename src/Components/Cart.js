import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cartItems.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cartItems, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div className="p-2 pt-20 flex flex-col items-center">
      <h1>Shopping Cart</h1>
      <div className="flex flex-col items-center">
        {cartItems.map((item) => (
          <CartItem key={item.id} itemData={item} />
        ))}
      </div>
      <div className="h-48 w-48 border-2">
        <p>Your Summary</p>
        <div className="flex flex-col">
          <p>Total : {totalItems} items</p>
          <p>${totalPrice}</p>
        </div>
        <button className="p-2 bg-gray-200 rounded-full">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

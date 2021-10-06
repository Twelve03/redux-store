import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);

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
          <p>Subtotal : (x items)</p>
          <p>Total Price</p>
        </div>
        <button className="p-2 bg-gray-200 rounded-full">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

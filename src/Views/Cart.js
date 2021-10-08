import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "../Components/CartItem";

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
    <div className="p-2 pt-20 pb-8 flex flex-col items-center">
      <h1 className="text-2xl">Shopping Cart</h1>
      {/* Cart items array */}
      <div className="mt-6 flex flex-col items-center">
        {cartItems.map((item) => (
          <CartItem key={item.id} itemData={item} />
        ))}
      </div>

      {/* Show checkout summary if there are cart items */}
      {cartItems.length > 0 ? (
        <div className="mt-6 flex flex-col">
          <div className="mt-4 w-64 flex items-center justify-between">
            <p className="text-lg font-medium text-gray-600">
              Total Price ({totalItems}) items
            </p>
            <p className="text-xl font-semibold text-green-500">
              ${totalPrice}
            </p>
          </div>
          <button className="p-2 mt-6 self-center bg-black text-white rounded-sm w-4/5">
            Proceed to Checkout
            <i className="ml-4 fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
      ) : (
        <div className="mt-6 flex flex-col items-center">
          <i className="far fa-sad-tear text-6xl"></i>
          <p className="mt-4 text-xl">You havent picked any items yet!</p>
        </div>
      )}
    </div>
  );
};

export default Cart;

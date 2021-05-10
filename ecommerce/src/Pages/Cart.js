import { useEffect, useState } from "react";
import CartCard from "../Components/CartCard";
import PriceCalculator from "../Components/PriceCalculator";
import { useApp } from "../context/App-context";

import useCart from "../api/FetchCart";
import CartLoadHandler from "../api/FetchCart";
export default function Cart() {
  const { state} = useApp();
  const userName = state.userName;

CartLoadHandler()
const cartItems = state.cart;
  return (
    <div className="cart-body">
      {userName == null ? (
        <div className="">
          <h1 className="text-center">Please Login or Sign up first</h1>
        </div>
      ) : cartItems.length == 0 ? (
        <div className="empty-cart">
          <h1>Please add Some products in your cart
          </h1>
        </div>
      ) : (
        <div>
          <h1 className="text-center">Cart Summary </h1>
          <div className="cart-summary-wrap">
            <div className="cart-card-wrap">
              {cartItems.map((item) => (
                <CartCard item={item} />
              ))}
            </div>
            <PriceCalculator cartItems={cartItems} />
          </div>
        </div>
      )}
    </div>
  );
}

import { useEffect, useState } from "react";
import useCartLoad from "../api/FetchCart";
import CartCard from "../Components/CartCard";
import PriceCalculator from "../Components/PriceCalculator";
import { useApp } from "../Context/AppContextProvider";
export default function Cart() {
  const { state } = useApp();
  let userId = state.userId;
  useCartLoad();
  const cartItems = state.cart;
  return (
    <div className="cart-body">
      {userId == null ? (
        <div className="">
          <h1 className="text-center">Please Login or Sign up first</h1>
        </div>
      ) : cartItems.length == 0 ? (
        <div className="empty-cart">
          <h1>Please add Some products in your cart</h1>
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

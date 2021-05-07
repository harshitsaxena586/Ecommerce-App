import { useEffect, useState } from "react";
import CartCard from "../Components/CartCard";
import PriceCalculator from "../Components/PriceCalculator";
import { useApp } from "../context/App-context";
import toast from "react-hot-toast";
import axios from "axios";
export default function Cart() {
  const { state, dispatch } = useApp();
  const userName = state.userName;
// testing
  const [cart, setCart] = useState([]);
  async function cartLoadHandler() {
    await axios({
      method: "get",
      url: `https://jainwin.herokuapp.com/cart/${userName}`,
      data: {}
    })
      .then(function (response) {
        toast.success("cart loaded succesfully");
        const { cart } = response.data;
        setCart(() => cart.itemsInCart);
      })
      .catch(function (error) {
        console.log(error.response);
        toast.error("Invalid Username or Password");
      });
  }
  useEffect(cartLoadHandler, []);
  const cartItems = cart;
console.log(cartItems)
  return (
    <div className="cart-body">
      {userName == null ? (
        <div className="">
          <h1 className="text-center">Please Login or Sign up first</h1>
          {/* <img styel={{align:"center"}}src="https://ik.imagekit.io/harshit/mirage-logged-out_1_2F-BRhUof6.png"/> */}
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

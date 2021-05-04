import react from "react";
import CartCard from "../Components/CartCard";
// import Notfication from "../Components/Notification";
import PriceCalculator from "../Components/PriceCalculator";
import { useApp } from "../context/App-context";
import toast, { Toaster } from 'react-hot-toast';
export default function Cart() {
  const { state, dispatch } = useApp();
  const cartItems=state.cartItems
  return (
    <div className="cart-body">
    {cartItems.length==0? <div className="empty-cart"> 
    
    <h1>Please add Some products in your cart </h1></div>:
    <div>
     
        <h1>Cart Summary </h1>
       
      <div className="cart-summary-wrap">
        <div className="cart-card-wrap">
            {cartItems.map(item=><CartCard item={item}/>)}
        </div>
       <PriceCalculator cartItems={cartItems}/>
      </div>
    </div>
    }
      
    </div>
  );
}

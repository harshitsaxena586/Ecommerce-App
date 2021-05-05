import react, { useState } from "react";

export default function PriceCalculator( {cartItems} ) {
console.log(cartItems)
const totalPriceArr=[]
cartItems.map(({item})=>totalPriceArr.push(item.price))

const cartTotal=totalPriceArr.reduce((acc,crr)=>acc+crr)

const shippingPriceArr=[]
cartItems.map(item=>console.log(item))
cartItems.map(({item})=>  shippingPriceArr.push(item.shipping))
const shipping=shippingPriceArr.reduce((acc,crr)=>acc+crr)
console.log(shipping)
return (
    <div className="price-calculator">
      <h1>Price Summary</h1>
      <div></div>
      <h2>Cart Subtotal: {cartTotal}</h2>
      <h2>Shipping Charges: {shipping>0?500:"Free"}</h2>
      <hr />
     <h2>To pay:₹ {shipping+cartTotal}</h2> 
    </div>
  );
}

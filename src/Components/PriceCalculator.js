import { loadStripe } from "@stripe/stripe-js";
import { useApp } from "../Context/AppContextProvider";

export default function PriceCalculator({ cartItems }) {
  const totalPriceArr = [];
  cartItems.map(({ item }) => totalPriceArr.push(item.price));
  const cartTotal = totalPriceArr.reduce((acc, crr) => acc + crr);
  const shippingPriceArr = [];
  cartItems.map(({ item }) => shippingPriceArr.push(item.shipping));
  const shipping = shippingPriceArr.reduce((acc, crr) => acc + crr);
  const checkout = (shipping + cartTotal) * 100; //converting to standard stripe format 2000->20.00

  const stripePromise = loadStripe(
    "pk_test_51IIuseIHN65y8kg7eEjhdCwWXk1s8ZrcDfTnCnQKGVoaqGDJ1LYAJU3rLLHQyAaZ4B1PYTGePQe5cT3D74dr6uBm00U1jpnVBz"
  );
  const { state } = useApp();
  const data = {
    userId: state.userId,
    name: "Cart Total",
    price: checkout,
  };
  const checkoutHandler = async (event) => {
    const stripe = await stripePromise;

    // Calling Backend to Create Payment Session
  
    const response = await fetch(
      "https://jainwin-backend.herokuapp.com/create-checkout-session",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    const session = await response.json();

    // Redirecting To Stripe Checkout .
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      console.log("payment Failed to call ");
    }
  };

  return (
    <div className="price-calculator">
      <h1>Price Summary</h1>
      <div></div>
      <h2>Cart Subtotal: {cartTotal}</h2>
      <h2>Shipping Charges: {shipping > 0 ? 500 : "Free"}</h2>
      <hr />
      <h2>To pay: ₹ {shipping + cartTotal}</h2>
      <button
        className="Cta-primary checkout pointer"
        onClick={checkoutHandler}
      >
        Checkout
      </button>
    </div>
  );
}

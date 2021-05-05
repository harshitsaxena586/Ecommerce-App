import react from "react";
import { useApp } from "../context/App-context";

export default function CartCard({ item }) {
  const { item: newItem } = item;
  console.log(newItem);
  function QuantityHandler() {
    return (
      <div>
        <button>-</button>
        <span>
          <h6> {newItem.quantity}</h6>
        </span>
        <button>+</button>
      </div>
    );
  }
  const { dispatch } = useApp();
  return (
    <div className="cart-card">
      <div className="cart-card-img">
        <img src={newItem.img} />
      </div>
      <div className="cart-card-content">
        <h1>{newItem.name}</h1>
        <div>
          <h2>
            {" "}
            Shipping Charges{" "}
            <span className="spaced">₹ {newItem.shipping}</span>
          </h2>
          <h2> Esitmated Delivery{newItem.delivery}</h2>
          <h2> Quantity <span className="spaced">1</span></h2>
        </div>
      </div>
      <div className="price-remove">
        <h2>
          Price <span className="spaced">₹ {newItem.price}</span>
        </h2>
        <h2
          className="remove"
          onClick={() => dispatch({ type: "REMOVEFROMCART", payload: newItem })}
        >
          Remove{" "}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z"
              fill="#FF0303"
            />
            <path d="M9 9H11V17H9V9Z" fill="#FF0303" />
            <path d="M13 9H15V17H13V9Z" fill="#FF0303" />
          </svg>
        </h2>
      </div>
    </div>
  );
}

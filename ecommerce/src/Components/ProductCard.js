import { useApp } from "../Context/AppContextProvider";
import toast from "react-hot-toast";
import axios from "axios";

export default function ProductCard({ item }) {
  const { state, dispatch } = useApp();
  const userName = state.userName;

  async function cartHandler(item) {
    item = { ...item, quantity: 1 };
    if (userName == null) {
      toast.error("Please Login before adding to cart");
    }

    await axios({
      method: "post",
      url: `https://jainwin-backend.herokuapp.com/cart/${userName}`,

      data: {
        item
      }
    })
      .then(function (response) {
        toast.success("added to cart");
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }

  return (
    <div className="product-card ">
      <img src={item.img} alt="product-image" />
      <div className="card-content">
        <h1>{item.name}</h1>
        <h4>{item.highlights}</h4>
        <h3>₹ {item.price}</h3>
      </div>
      <button onClick={() => cartHandler(item)} className="Cta-primary">
        Add To Cart
      </button>
    </div>
  );
}

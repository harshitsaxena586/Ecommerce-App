import { useEffect } from "react";
import { useApp } from "../Context/AppContextProvider";
import toast from "react-hot-toast";
import axios from "axios";

export default async function useCartLoad() {
  const { state, dispatch } = useApp();
  const fetchCart = async () => {
    await axios({
      method: "get",
      url: `https://jainwin-backend.herokuapp.com/cart`,
    })
      .then(function (response) {
        toast.success("cart loaded succesfully");
        const { cart } = response.data;
        dispatch({ type: "CARTUPDATE", payload: cart.itemsInCart });
      })
      .catch(function (error) {
        console.log(error.response);
      });
  };
  useEffect(() => {
    fetchCart();
  }, []);
}

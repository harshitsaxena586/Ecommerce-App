import React, { useEffect } from "react";
import { useApp } from "../context/App-context";
import toast from "react-hot-toast";
import axios from "axios";

export default async function CartLoadHandler() {
  const { state, dispatch } = useApp();
  const userName = state.userName;
  useEffect(async()=>{
    await axios({
        method: "get",
        url: `https://jainwin.herokuapp.com/cart/${userName}`
      })
        .then(function (response) {
          toast.success("cart loaded succesfully");
          const { cart } = response.data;
          dispatch({ type: "CARTUPDATE", payload: cart.itemsInCart });
        })
        .catch(function (error) {
          console.log(error.response);
        //   toast.error("");
        });
  },[])
}


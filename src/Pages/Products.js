import ProductCard from "../Components/ProductCard";
import ProductFilter from "../Components/ProductFilter";
import { useApp } from "../Context/AppContextProvider";
import axios from "axios";
import { useEffect } from "react";

export default function Products() {
  const { dispatch, state } = useApp();

  async function productsload() {
    await axios({
      method: "get",
      url: "https://jainwin-backend.herokuapp.com/products"
    })
      .then(function (response) {
        const { products } = response.data;
        dispatch({ type: "PRODUCTSLOADED", payload: products });
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }
  useEffect(() => state.products.length == 0 && productsload(), []);

  let products =state.isFilterApplied == true ? state.filteredProducts : state.products;
  
  return (
    <div className="products-page">
      <ProductFilter />
      <div className="product-wrap">
        <div className="list-tag">
          {products.map((item) => {
            return <ProductCard item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

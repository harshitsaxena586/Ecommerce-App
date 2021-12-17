import ProductCard from "../Components/ProductCard";
import ProductFilter from "../Components/ProductFilter";
import { useApp } from "../Context/AppContextProvider";
import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
export default function Products() {
  const { dispatch, state } = useApp();

  async function productsload() {
    const fetchProducts = async () => {
      const response = await axios.get(
        "https://jainwin-backend.herokuapp.com/products"
      );
      dispatch({ type: "PRODUCTSLOADED", payload: response.data.products });
    };

    await toast.promise(fetchProducts(), {
      loading: "Fetching Products",
      success: "Completed",
      error: "Error when fetching",
    });
  }
  useEffect(() => state.products.length == 0 && productsload(), []);

  let products =
    state.isFilterApplied == true ? state.filteredProducts : state.products;

  return (
    <div className="products-page">
      <ProductFilter />
      <div className="product-wrap">
        <div className="list-tag">
          {products.map((item) => {
            return <ProductCard key={item._id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

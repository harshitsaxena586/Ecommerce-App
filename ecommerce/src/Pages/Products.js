import ProductCard from "../Components/ProductCard"
import ProductFilter from "../Components/ProductFilter"
import { useApp } from "../context/App-context";

// -----------------------------------------------------------------------------------

export default function Products() {
const {state}=useApp()
let products= state.isFilterApplied==true?state.filteredProducts : state.products 

    return (
        <div className="products-page">
        <ProductFilter />
        <div className="product-wrap">
        <div className="list-tag">
        {products.map((item) => {
                return (
                    <ProductCard item={item}/> 
                )
            })}
            </div>
        </div>
        </div>
        

    )
}
import react from "react"
import ProductCard from "../Components/Product-Card"
import ProductFilter from "../Components/ProductFilter"
import {
    AllProducts
} from "./primaryDB"

export default function Products() {
    return (
        <div className="products-page">
        <ProductFilter />
        <div className="product-wrap">
        <div className="list-tag">
            { AllProducts.map((item) => {
                console.log("hello")
                return (
                    <div>
                <ProductCard title={item.name} src={item.img} price={item.price} highlights={item.highlights}/> 
                    </div>
                )
            })}
            </div></div>
        </div>
        

    )


}
import react from "react"

export default function ProductCard({src,title,price,highlights,wishlist}){
    console.log("card")
    return (
        <div className="product-card ">
            <img src={src}/>
        <div className="card-content">
            <h1>
            {title}
            </h1>
            <h4>{highlights}</h4>
            <h3>₹{" "}{price}</h3>
        </div> 
            <button className="Cta-Cart">Add To Cart</button>
        </div>
       
    )
}

       
        
import { useApp } from "../context/App-context"
import toast from 'react-hot-toast';
import axios from "axios";

export default function ProductCard({item}){
    const {state,dispatch}=useApp()
    const userName=(state.userName)
    async function cartHandler(item) {
        if(userName==null){
            toast.error("Please Login before adding to cart")
        }
        dispatch({type:"ADDTOCART",payload:item})
        
        await axios({
            method: 'post',
            url: `https://jainwin.herokuapp.com/cart/${userName}`,
            data: {
                item
            }
          })
          .then(function (response) {
            console.log(response.data)
            toast.success("added to cart")
          })
          .catch(function (error) {
              console.log(error.response)
          })
    }

    const notify = () => toast.success(`added to cart`)
    return (
        <div className="product-card ">
            <img src={item.img}/>
        <div className="card-content">
            <h1>
            {item.name}
            </h1>
            <h4>{item.highlights}</h4>
            <h3>₹{" "}{item.price}</h3>
        </div> 
            <button onClick={()=>cartHandler(item)} className="Cta-Cart">Add To Cart</button>
        </div>
       
    )
}

       
        
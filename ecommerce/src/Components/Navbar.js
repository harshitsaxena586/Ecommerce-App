import react from "react"
import {Routes,  Route,Link} from 'react-router-dom';
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";


export default function Navbar(){
    
    return (
      
    <nav>
    <div className="logo">
    <img src="https://d33wubrfki0l68.cloudfront.net/52a100676f64b5bf89afb1f5a8692244a457dc84/cba32/logo.d166859b.svg"/>
    </div>
    
    <ul class="list-tag">
      <li> <Link to="/">Home</Link></li>
      <li> <Link to="cart">Cart </Link></li>
      <li> <Link to="cart">Wishlist </Link></li>
      <li> <Link to="cart">Login </Link></li>
      <li> <Link to="products">Products </Link></li>
    </ul>
  </nav>
    )
       
 
}

    // <input type="text" class="input-search" placeholder="Search" name="search"></input>
// 
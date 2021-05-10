import './neutron-ui.css';
import './App.css';
import {Routes,  Route} from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Navbar from './Components/Navbar';
import Products from './Pages/Products';
import Login from './Pages/Login';
import  { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import axios from "axios";

function App() {
async function serverConnect() {
  // doing only to wake up the server 
    axios({
      method:"GET",
      url:"https://jainwin-backend.herokuapp.com/"
    })
    .then(console.log("Connected to backend server "))
  }

  useEffect(serverConnect,[])
  return (
    <div className="App">
   <div><Toaster/></div>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="products" element={<Products/>}/>
    <Route path="cart" element={<Cart/>}/>
    <Route path="login" element={<Login />}/>
    </Routes>
    </div>
  );
}

export default App;

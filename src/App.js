import "./neutron-ui.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar";
import Products from "./Pages/Products";
import Login from "./Pages/Login";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import axios from "axios";
import Logout from "./Components/Logout";
import { useApp } from "./Context/AppContextProvider";
function App() {
  const { state } = useApp();
  let authToken = localStorage.getItem("authToken");
  if (state.userId) {
    axios.interceptors.request.use((config) => {
      config.headers.authorization = authToken;
      return config;
    });
  }

  return (
    <div className="App">
      <div>
        <Toaster />
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
